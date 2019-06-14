// 9cec7acbb1acb02010fed62e10e1c3dc
// url: https://www.food2fork.com/api/search
// an api key is like a unique id to track user usage

// https://www.food2fork.com/api/search?key=YOUR_API_KEY&q=chicken%20breast&page=2

import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements } from "./views/base";
/*
 GLOBAL STATE OF THE APP
 * - Search object
 * - Current Recepe
 * - Shopping List Object
 * -  Liked Recipes
*/
const state = {};

const controlSearch = async () => {
  // 1) Get query from view
  const query = searchView.getInput(); //TODO
  console.log(query);

  if (query) {
    searchView.clearResults();

    // 2) New Search object and add its state
    state.search = new Search(query);

    // 3) Prevent UI for results
    searchView.clearInput();

    // 4) Seach for recipes
    await state.search.getResults();

    // 5) render results on UI
    // console.log(state.search.result);
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

// search.getResults();
controlSearch();
