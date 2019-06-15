// 9cec7acbb1acb02010fed62e10e1c3dc
// url: https://www.food2fork.com/api/search
// an api key is like a unique id to track user usage

// https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2

import Search from "./models/Search";
import Recipe from "./models/Recipe";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./views/base";
/*
 GLOBAL STATE OF THE APP
 * - Search object
 * - Current Recepe
 * - Shopping List Object
 * -  Liked Recipes
*/
const state = {};

/*SEARCH CONTROLLER */
const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput(); //TODO
  console.log(query);

  if (query) {
    // 2) New Search object and add its state
    state.search = new Search(query);

    // 3) Prevent UI for results
    searchView.clearInput();
    searchView.clearResults();
    renderLoader(elements.searchRes);

    // 4) Seach for recipes
    await state.search.getResults();
    clearLoader();

    // 5) render results on UI
    // console.log(state.search.result);
    searchView.renderResults(state.search.result);
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
const r = new Recipe(46956);

r.getRecipe();
console.log(r);
