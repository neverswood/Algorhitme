import { recipes } from "./data/recipes.js";
import { displayRecipes, displayTags } from "./interface.js";

export default class App {
  constructor() {
    this.filteredRecipes = recipes;
    this.selectedTags = [];
    this.keyword = "";
  }

  updateFilteredRecipes() {
    if (this.keyword.length < 3) {
      this.filteredRecipes = recipes;
    } else {
      this.filteredRecipes = filterRecipesByKeyword(this.keyword);
    }
    //this.filteredRecipes = filterRecipesByTags(this.filteredRecipes);
    displayRecipes(this.filteredRecipes);
  }

  toggleTag(tag, tagType) {
    const tagIndex = this.selectedTags.indexOf(tag);
    if (tagIndex === -1) {
      this.selectedTags.push(tag);
    } else {
      this.selectedTags.splice(tagIndex, 1);
    }
    displayTags(this.selectedTags);
    this.updateFilteredRecipes();
  }

  setKeyword(keyword) {
    this.keyword = keyword;
    this.updateFilteredRecipes();
  }
}

function filterRecipesByKeyword(keyword) {
  let results = [];
  for (let recipesIndex = 0; recipesIndex < recipes.length; recipesIndex++) {
    const lesingredients = recipes[recipesIndex].ingredients;
    let ingredientMatchKeyword = false;
    for (
      let ingredientsIndex = 0;
      ingredientsIndex < lesingredients.length;
      ingredientsIndex++
    ) {
      if (
        lesingredients[ingredientsIndex].ingredient
          .toLowerCase()
          .indexOf(keyword.toLowerCase()) !== -1
      ) {
        ingredientMatchKeyword = true;
      }
    }
    const nameMatchKeyword =
      recipes[recipesIndex].name
        .toLowerCase()
        .indexOf(keyword.toLowerCase()) !== -1;
    const descriptionMatchKeyword =
      recipes[recipesIndex].description
        .toLowerCase()
        .indexOf(keyword.toLowerCase()) !== -1;

    if (ingredientMatchKeyword || nameMatchKeyword || descriptionMatchKeyword) {
      results.push(recipes[recipesIndex]);
    }
  }
  return results;
}
