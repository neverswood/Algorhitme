import { recipes } from "./data/recipes.js";
import { displayRecipes, displayTags } from "./interface.js";

export default class App {
  constructor() {
    this.filteredRecipes = recipes;
    this.selectedTags = [];
    this.keyword = "";
  }

  updateFilteredRecipes() {
    console.log("lop", this.filteredRecipes.length);
    if (this.keyword.length < 3) {
      this.filteredRecipes = recipes;
    } else {
      this.filteredRecipes = filterRecipesByKeyword(this.keyword);
    }

    this.filteredRecipes = filterRecipesByTags(
      this.filteredRecipes,
      this.selectedTags
    );
    if (this.filteredRecipes.length > 0) {
      displayRecipes(this.filteredRecipes);
    } else {
      const containerRecipe = document.getElementById("container-item");
      containerRecipe.innerHTML =
        "Aucune recette ne correspond à votre critère... vous pouvez chercher << tarte aux pommes >>,  << poisson >> , etc.";
    }
  }

  toggleTag(tag, tagType) {
    const tagIndex = this.selectedTags.findIndex(
      (selectedTag) => selectedTag.name === tag
    );

    if (tagIndex === -1) {
      this.selectedTags.push({
        type: tagType,
        name: tag,
      });
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
    const ingredients = recipes[recipesIndex].ingredients;
    let ingredientMatchKeyword = false;
    for (
      let ingredientsIndex = 0;
      ingredientsIndex < ingredients.length;
      ingredientsIndex++
    ) {
      if (
        ingredients[ingredientsIndex].ingredient
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

function filterRecipesByTags(recipes, tags) {
  let results = [];
  if (tags.length === 0) {
    results = recipes;
  } else {
    for (let recipesIndex = 0; recipesIndex < recipes.length; recipesIndex++) {
      for (let tagsIndex = 0; tagsIndex < tags.length; ++tagsIndex) {
        const ingredients = recipes[recipesIndex].ingredients;
        for (
          let ingredientsIndex = 0;
          ingredientsIndex < ingredients.length;
          ingredientsIndex++
        ) {
          let ingredientMatchTag = ingredients[ingredientsIndex].ingredient
            .toLowerCase()
            .indexOf(tags[tagsIndex].name.toLowerCase());
          if (ingredientMatchTag > -1) {
            results.push(recipes[recipesIndex]);
          }
        }
        for (
          let ustensilsIndex = 0;
          ustensilsIndex < recipes[recipesIndex].ustensils.length;
          ++ustensilsIndex
        ) {
          let utensilMatchTag = recipes[recipesIndex].ustensils[ustensilsIndex]
            .toLowerCase()
            .indexOf(tags[tagsIndex].name.toLowerCase());
          if (utensilMatchTag > -1) {
            results.push(recipes[recipesIndex]);
          }
        }

        let applianceMatchTag = recipes[recipesIndex].appliance
          .toLowerCase()
          .indexOf(tags[tagsIndex].name.toLowerCase());
        if (applianceMatchTag > -1) {
          results.push(recipes[recipesIndex]);
        }
      }
    }
  }

  return results;
}
