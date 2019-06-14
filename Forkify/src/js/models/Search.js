import axios from "axios";

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults(query) {
    const key = "9cec7acbb1acb02010fed62e10e1c3dc";
    try {
      const res = await axios(
        `https://www.food2fork.com/api/search?key=${key}&q=${this.query}`
      );
      this.result = res.data.recipes;
      //   console.log(this.result);
    } catch (e) {
      alert(e);
    }
  }
}
