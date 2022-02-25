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

    this.filteredRecipes = filterRecipesByAppliances(
      this.filteredRecipes,
      this.selectedTags
    );
    this.filteredRecipes = filterRecipesByUtensils(
      this.filteredRecipes,
      this.selectedTags
    );
    this.filteredRecipes = filterRecipesByIngredients(
      this.filteredRecipes,
      this.selectedTags
    );

    if (this.filteredRecipes.length > 0) {
      displayRecipes(this.filteredRecipes);
    } else {
      const containerRecipe = document.getElementById("container-item");
      containerRecipe.innerHTML =
        "Aucune recette ne correspond à votre critère... vous pouvez chercher 'tarte aux pommes',  'poisson' , etc.";
    }
  }

  search(resultsRecipes, tags) {
    let results = new Set();

    // results = this.searchAllByRequest(request);
    results = filterRecipesByAppliances(resultsRecipes, tags);
    //  resultsRecipes = this.searchByUstensile(resultsRecipes, ustensiles);
    results = filterRecipesByUtensils(resultsRecipes, tags);

    return results;
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
  let results = new Set();
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
            results.add(recipes[recipesIndex]);
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
            results.add(recipes[recipesIndex]);
          }
        }

        let applianceMatchTag = recipes[recipesIndex].appliance
          .toLowerCase()
          .indexOf(tags[tagsIndex].name.toLowerCase());
        console.log("lok", tags[tagsIndex].name);
        if (applianceMatchTag > -1) {
          results.add(recipes[recipesIndex]);
        }
      }
    }
  }
  // console.log("edr", results);

  return results;
}

function filterRecipesByAppliances(recipes, tags) {
  let filterTags = [];
  for (let tagsIndex = 0; tagsIndex < tags.length; ++tagsIndex) {
    if (tags[tagsIndex].type === "appliance") {
      filterTags.push(tags[tagsIndex]);
    }
  }
  let results = new Set();
  if (filterTags.length === 0) {
    results = recipes;
  } else {
    for (let recipesIndex = 0; recipesIndex < recipes.length; recipesIndex++) {
      for (let tagsIndex = 0; tagsIndex < filterTags.length; ++tagsIndex) {
        let applianceMatchTag = recipes[recipesIndex].appliance
          .toLowerCase()
          .indexOf(filterTags[tagsIndex].name.toLowerCase());
        if (applianceMatchTag > -1) {
          results.add(recipes[recipesIndex]);
        }
      }
    }
  }
  console.log("edr", results);

  return Array.from(results);
}

function filterRecipesByUtensils(recipes, tags) {
  let filterTags = [];
  for (let tagsIndex = 0; tagsIndex < tags.length; ++tagsIndex) {
    if (tags[tagsIndex].type === "utensils") {
      filterTags.push(tags[tagsIndex]);
    }
  }
  let results = new Set();
  if (filterTags.length === 0) {
    results = recipes;
  } else {
    for (let recipesIndex = 0; recipesIndex < recipes.length; recipesIndex++) {
      for (let tagsIndex = 0; tagsIndex < filterTags.length; ++tagsIndex) {
        for (
          let ustensilsIndex = 0;
          ustensilsIndex < recipes[recipesIndex].ustensils.length;
          ++ustensilsIndex
        ) {
          let utensilMatchTag = recipes[recipesIndex].ustensils[ustensilsIndex]
            .toLowerCase()
            .indexOf(filterTags[tagsIndex].name.toLowerCase());
          if (utensilMatchTag > -1) {
            results.add(recipes[recipesIndex]);
          }
        }
      }
    }
  }
  console.log("popipop", results);

  return Array.from(results);
}

function filterRecipesByIngredients(recipes, tags) {
  let filterTags = [];
  for (let tagsIndex = 0; tagsIndex < tags.length; ++tagsIndex) {
    if (tags[tagsIndex].type === "ingredients") {
      filterTags.push(tags[tagsIndex]);
    }
  }
  let results = [];
  if (filterTags.length === 0) {
    results = recipes;
  } else {
    for (let recipesIndex = 0; recipesIndex < recipes.length; recipesIndex++) {
      let matchAllTags = true;

      for (let tagsIndex = 0; tagsIndex < filterTags.length; ++tagsIndex) {
        const ingredients = recipes[recipesIndex].ingredients;
        let ingredientMatchTag = -1;
        for (
          let ingredientsIndex = 0;
          ingredientsIndex < ingredients.length;
          ingredientsIndex++
        ) {
          ingredientMatchTag = ingredients[ingredientsIndex].ingredient
            .toLowerCase()
            .indexOf(filterTags[tagsIndex].name.toLowerCase());
          if (ingredientMatchTag > -1) {
            break;
          }
        }
        if (ingredientMatchTag === -1) {
          matchAllTags = false;
          break;
        }
      }
      if (matchAllTags) {
        results.push(recipes[recipesIndex]);
      }
    }
  }
  console.log("edr1", results);

  return results;
}
