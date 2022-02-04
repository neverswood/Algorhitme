import { recipes } from "./data/recipes.js";
import { displayRecipes, displayTags } from "./interface.js";
import {
  displayAppliancesDropdown,
  bindAppliancesDropdownEventListeners,
  getAppliances,
} from "./dropdownAppliance.js";
import { dropdownIngredients } from "./dropdownIngredient.js";
import { dropdownUtensils } from "./dropdownUtensil.js";
import { keyWord } from "./filter.js";
import { filterUtensil } from "./filter.js";
import { filterAppliance } from "./filter.js";
import { filterIngredient } from "./filter.js";
import { closeDropdownAppliance } from "./dropdown.js";
import App from "./App.js";

function index() {
  const app = new App();
  window.addEventListener("click", (e) => {
    if (!e.target.matches("#dropdownAppliance *")) {
      closeDropdownAppliance();
    }
  });

  displayRecipes(app.filteredRecipes);
  bindAppliancesDropdownEventListeners(app);
  bindRemoveTagEventListener(app);
  dropdownUtensils();
  dropdownIngredients();
  keyWord(app);
  filterUtensil();
  filterAppliance();
  filterIngredient();
  //filterRecipesBuyTag();
  //closeDropdownInactive();
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
