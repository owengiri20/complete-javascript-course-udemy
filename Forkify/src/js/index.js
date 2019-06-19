// 9cec7acbb1acb02010fed62e10e1c3dc
// url: https://www.food2fork.com/api/search
// an api key is like a unique id to track user usage

// https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2

import Search from "./models/Search";
import Recipe from "./models/Recipe";
import List from "./models/List";
import Likes from "./models/Likes";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import * as listView from "./views/listView";
import * as likesView from "./views/likesView";
import { elements, renderLoader, clearLoader } from "./views/base";

/*
 GLOBAL STATE OF THE APP
 * - Search object
 * - Current Recepe
 * - Shopping List Object
 * -  Liked Recipes
*/
const state = {};

window.state = state;

/*SEARCH CONTROLLER */
const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput(); //TODO
  // const query = "pizza"; //TODO

  // console.log(query);

  if (query) {
    // 2) New Search object and add its state
    state.search = new Search(query);

    // 3) Prevent UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    try {
      // 4) Seach for recipes
      await state.search.getResults();
      clearLoader();

      // 5) render results on UI
      // console.log(state.search.result);
      searchView.renderResults(state.search.result);
    } catch (e) {
      console.log(e);
      alert("somthing went wrong with search");
      clearLoader();
    }
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

elements.searchRes.addEventListener("click", e => {
  const btn = e.target.closest(".btn-inline");
  if (btn) {
    const goToPage = parseInt(btn.dataset.goto, 10);
    searchView.clearResults();
    searchView.renderResults(state.search.result, goToPage);
  }
});

/*RECIPE CONTROLLER */
const controlRecipe = async () => {
  // Get the ID from url
  const id = window.location.hash.replace("#", "");
  console.log(id);
  if (id) {
    // prepare UI for changes
    recipeView.clearRecipe();
    renderLoader(elements.recipe);

    // Highlight selected search item
    if (state.search) {
      searchView.highlightedSelected(id);
    }

    // Create a new recipe object
    state.recipe = new Recipe(id);

    try {
      // Get recipe data and parse ingredients
      await state.recipe.getRecipe();
      state.recipe.parseIngredients();
      // Calc servings and time
      state.recipe.calcTime();
      state.recipe.calcServings();

      // render recipe
      // console.log(state.recipe);
      clearLoader();
      recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));
    } catch (e) {
      alert("something went wrong ):");
      console.log(e);
    }
  }
};
["hashchange", "load"].forEach(e => window.addEventListener(e, controlRecipe));

/* 
  LIST CONTROLLER
*/
const controlList = () => {
  // create a new lis if there is none yet
  if (!state.list) state.list = new List();

  // add each ingredient to the list and ui
  state.recipe.ingredients.forEach(el => {
    const item = state.list.addItem(el.count, el.unit, el.ingredient);
    listView.renderItem(item);
  });
};

// Handle delete list item events
elements.shopping.addEventListener("click", e => {
  const id = e.target.closest(".shopping__item").dataset.itemid;

  // Handle delete button
  if (e.target.matches(".shopping__delete, .shopping__delete *")) {
    // delete from state
    state.list.deleteItem(id);

    // delete from ui
    listView.deleteItem(id);

    // handle count update
  } else if (e.target.matches(".shopping__count-value")) {
    const val = parseFloat(e.target.value, 10);
    state.list.updateCount(id, val);
  }
});

/* 
  LIKE CONTROLLER
*/

// TESTING

const controlLike = () => {
  if (!state.likes) state.likes = new Likes();
  const currentID = state.recipe.id;

  // user has not yet liked current recipe
  if (!state.likes.isLiked(currentID)) {
    // Add like to state
    const newLike = state.likes.addLike(
      currentID,
      state.recipe.title,
      state.recipe.author,
      state.recipe.img
    );

    // Toggle like button
    likesView.toggleLikeBtn(true);
    // Add like to ui list
    console.log(state.likes);
    likesView.renderLike(newLike);

    // user has liked current recipe
  } else {
    // Remove like from state
    state.likes.deleteLike(currentID);

    // Toggle like button
    likesView.toggleLikeBtn(false);

    // Remove like from ui list
    likesView.deleteLike(currentID);
    console.log(state.likes);
  }
  likesView.toggleLikeMenu(state.likes.getNumLikes());
};

// Restore likes on pageLoad ////////////////////////////////
window.addEventListener("load", () => {
  state.likes = new Likes();

  // restore likes
  state.likes.readStorage();

  // toggle button
  likesView.toggleLikeMenu(state.likes.getNumLikes());

  // render existing likes
  state.likes.likes.forEach(like => likesView.renderLike(like));
});

// Handling recipe button clicks
elements.recipe.addEventListener("click", e => {
  if (e.target.matches(".btn-decrease, .btn-decrease *")) {
    // Decreases button is clicked
    if (state.recipe.servings > 1) {
      state.recipe.updateServings("dec");
      recipeView.updateServingsIngredients(state.recipe);
    }
  } else if (e.target.matches(".btn-increase, .btn-increase *")) {
    // Increases button is clicked
    state.recipe.updateServings("inc");
    recipeView.updateServingsIngredients(state.recipe);
  } else if (e.target.matches(".recipe__btn--add, .recipe__btn--add *")) {
    // add ingredients to list
    controlList();
  } else if (e.target.matches(".recipe__love, .recipe__love *")) {
    // Likke controler
    controlLike();
  }
});

window.l = new List();
