import { recipes } from "./data/recipes.js";
import { displayRecipes } from "./interface.js";
import { dropdownDevices } from "./dropdownDevice.js";
import { dropdownIngredients } from "./dropdownIngredient.js";
import { dropdownUtensils } from "./dropdownUtensil.js";
import { keyWord } from "./filter.js";

function index() {
  for (let index = 0; index < recipes.length; index++) {
    displayRecipes(recipes[index]);
  }
  dropdownUtensils();
  dropdownDevices();
  dropdownIngredients();
  keyWord();
}

index();
