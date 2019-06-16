import axios from "axios";
import { key } from "../config";

export default class Recipe {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    try {
      const res = await axios(
        `https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`
      );
      this.title = res.data.recipe.title;
      this.author = res.data.recipe.publisher;
      this.img = res.data.recipe.imgage_url;
      this.url = res.data.recipe.source_url;
      this.ingredients = res.data.recipe.ingredients;

      // console.log(Recipe);
    } catch (err) {
      console.log(err);
      alert("somthing went wrong ):");
    }
  }

  calcTime() {
    // assuming that every 3 ingredients takes 15 mins
    const numIng = this.ingredients.length;
    const periods = Math.ceil(numIng / 3);
    this.time = periods * 15;
  }

  calcServings() {
    this.servings = 4;
  }

  parseIngredients() {
    const unitsLong = [
      "tablespoons",
      "tablespoon",
      "ounce",
      "ounces",
      "teaspoon",
      "teaspoons",
      "cups",
      "pounds"
    ];
    const unitsShort = [
      "tbsb",
      "tbsb",
      "oz",
      "oz",
      "tsp",
      "tsp",
      "cup",
      "pound"
    ];

    const newIngredients = this.ingredients.map(el => {
      // 1. Uniform units
      let ingredient = el.toLowerCase();
      unitsLong.forEach((curUnit, i) => {
        ingredient.replace(curUnit, unitsLong[i]);
      });

      // 2. Remove perethensis
      ingredient = ingredient.replace(/ *\([^)]*\) */g, "");

      // 3. Parse ingredienrs into count, unit and ingredient
      return ingredient;
    });

    this.ingredients = newIngredients;
  }
}
