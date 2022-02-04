import { recipes } from "./data/recipes.js";
import { displayRecipes } from "./interface.js";
import {
  displayDevicesDropdown,
  bindDevicesDropdownEventListeners,
  getDevices,
} from "./dropdownDevice.js";
import { dropdownIngredients } from "./dropdownIngredient.js";
import { dropdownUtensils } from "./dropdownUtensil.js";
import { keyWord } from "./filter.js";
import { filterUtensil } from "./filter.js";
import { filterDevice } from "./filter.js";
import { filterIngredient } from "./filter.js";
import { closeDropdownDevice } from "./dropdown.js";
import App from "./App.js";

//import { closeDropdownInactive } from "./dropdown.js";

function index() {
  const app = new App();
  window.addEventListener("click", (e) => {
    if (!e.target.matches("#dropdownDevice *")) {
      closeDropdownDevice();
    }
  });

  displayRecipes(app.filteredRecipes);
  bindDevicesDropdownEventListeners(app);

  dropdownUtensils();
  dropdownIngredients();
  keyWord(app);
  filterUtensil();
  filterDevice();
  filterIngredient();
  //filterRecipesBuyTag();
  //closeDropdownInactive();
}

index();
