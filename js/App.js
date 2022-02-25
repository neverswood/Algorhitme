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

    this.filteredRecipes = filterRecipesByTags(
      this.filteredRecipes,
      this.selectedTags
    );
    if (this.filteredRecipes.length > 0) {
      displayRecipes(this.filteredRecipes);
    } else {
      const containerRecipe = document.getElementById("container-item");
      containerRecipe.innerHTML =
        "Aucune recette ne correspond à votre critère... vous pouvez chercher ' tarte aux pommes ',  ' poisson ' , etc.";
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
  recipes.map((recipe) => {
    const ingredients = recipe.ingredients;
    let ingredientMatchKeyword = false;
    ingredients.forEach((ingredients) => {
      if (
        ingredients.ingredient.toLowerCase().indexOf(keyword.toLowerCase()) !==
        -1
      ) {
        ingredientMatchKeyword = true;
      }
    });
    const nameMatchKeyword =
      recipe.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    const descriptionMatchKeyword =
      recipe.description.toLowerCase().indexOf(keyword.toLowerCase()) !== -1;
    if (ingredientMatchKeyword || nameMatchKeyword || descriptionMatchKeyword) {
      results.push(recipe);
    }
  });
  return results;
}

function filterRecipesByTags(recipes, tags) {
  if (tags.length === 0) {
    return recipes;
  }
  let results = [];

  recipes.forEach((recipe) => {
    tags.forEach((tag) => {
      const ingredients = recipe.ingredients;
      ingredients.forEach((ingredients) => {
        let ingredientMatchTag = ingredients.ingredient
          .toLowerCase()
          .indexOf(tag.name.toLowerCase());
        if (ingredientMatchTag > -1) {
          results.push(recipe);
        }
      });
      const utensils = recipe.ustensils;
      utensils.forEach((utensils) => {
        let utensilMatchTag = utensils
          .toLowerCase()
          .indexOf(tag.name.toLowerCase());
        if (utensilMatchTag > -1) {
          results.push(recipe);
        }
      });
      let applianceMatchTag = recipe.appliance
        .toLowerCase()
        .indexOf(tag.name.toLowerCase());
      if (applianceMatchTag > -1) {
        results.push(recipe);
      }
    });
  });

  return results;
}
