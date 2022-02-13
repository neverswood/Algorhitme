import { displayRecipes } from "./interface.js";
import { bindAppliancesDropdownEventListeners } from "./dropdownAppliance.js";
import { bindIngredientsDropdownEventListeners } from "./dropdownIngredient.js";
import { bindUtensilsDropdownEventListeners } from "./dropdownUtensil.js";
import { bindKeyWordEventListeners } from "./filter.js";
import { displayCloseDropdown } from "./dropdown.js";
import App from "./App.js";

function index() {
  const app = new App();
  window.addEventListener("click", (e) => {
    if (!e.target.matches("#dropdown-appliances *")) {
      // closeDropdownAppliance();
      displayCloseDropdown("appliances");
    }
    if (!e.target.matches("#dropdown-utensils *")) {
      displayCloseDropdown("utensils");
    }
    if (!e.target.matches("#dropdown-ingredients *")) {
      displayCloseDropdown("ingredients");
    }
  });

  displayRecipes(app.filteredRecipes);
  bindAppliancesDropdownEventListeners(app);
  bindIngredientsDropdownEventListeners(app);
  bindUtensilsDropdownEventListeners(app);
  bindRemoveTagEventListener(app);
  bindKeyWordEventListeners(app);
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
