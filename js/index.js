import { displayRecipes } from "./interface.js";
import { bindAppliancesDropdownEventListeners } from "./dropdownAppliance.js";
import { bindIngredientsDropdownEventListeners } from "./dropdownIngredient.js";
import { bindUtensilsDropdownEventListeners } from "./dropdownUtensil.js";
import { keyWord } from "./filter.js";
import { filterUtensil } from "./filter.js";
import { filterAppliance } from "./filter.js";
import { filterIngredient } from "./filter.js";
import {
  closeDropdownAppliance,
  closeDropdownIngredient,
  closeDropdownUtensil,
} from "./dropdown.js";
import App from "./App.js";

function index() {
  const app = new App();
  window.addEventListener("click", (e) => {
    if (!e.target.matches("#dropdownAppliance *")) {
      closeDropdownAppliance();
    }
    if (!e.target.matches("#dropdownUtensils *")) {
      closeDropdownUtensil();
    }
    if (!e.target.matches("#dropdownIngredients *")) {
      closeDropdownIngredient();
    }
  });

  displayRecipes(app.filteredRecipes);
  bindAppliancesDropdownEventListeners(app);
  bindIngredientsDropdownEventListeners(app);
  bindUtensilsDropdownEventListeners(app);
  bindRemoveTagEventListener(app);
  keyWord(app);
  filterUtensil();
  filterAppliance();
  filterIngredient();
}

index();

function bindRemoveTagEventListener(app) {
  let tag = document.getElementById("tag");
  tag.addEventListener("click", (e) => {
    if (!e.target.matches(".tag *")) {
      return;
    }
    app.toggleTag(e.target.closest(".tag").dataset["tag"]);
  });
}
