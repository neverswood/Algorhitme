import { recipes } from "./data/recipes.js";
import { displayRecipes } from "./interface.js";
import { dropdownDevices } from "./dropdownDevice.js";
import { dropdownIngredients } from "./dropdownIngredient.js";
import { dropdownUtensils } from "./dropdownUtensil.js";
import { keyWord } from "./filter.js";
import { filterUtensil } from "./filter.js";
import { filterDevice } from "./filter.js";
import { filterIngredient } from "./filter.js";

//import { closeDropdownInactive } from "./dropdown.js";

function index() {
  displayRecipes(recipes);

  dropdownUtensils();
  dropdownDevices();
  dropdownIngredients();
  keyWord();
  filterUtensil();
  filterDevice();
  filterIngredient();
  //filterRecipesBuyTag();
  //closeDropdownInactive();
}

index();
