import { closeDropdownAppliance } from "./dropdown.js";
import {
  displayTags,
  renderAppliancesDropdown,
  renderTag,
} from "./interface.js";

export function getAppliances(recipes) {
  let applianceByRecipes = [];
  for (let index = 0; index < recipes.length; index++) {
    applianceByRecipes.push(recipes[index].appliance);
  }
  const allAppliances = applianceByRecipes.flat();

  return [...new Set(allAppliances)];
}

export function displayAppliancesDropdown(appliances) {
  const listBox = document.getElementById("listbox-appliances");
  const searchAppliance = document.getElementById("search-appliance");
  searchAppliance.style.display = "block";
  document.getElementById("listbox-nameAppliance").style.display = "none";
  document.getElementById("dropdownAppliance").style.width = "667px";
  listBox.innerHTML = renderAppliancesDropdown(appliances);
}

//bind = brancher, connecté
export function bindAppliancesDropdownEventListeners(app) {
  const dropdownAppliances = document.getElementById("listbox-nameAppliance");
  const chevron = document.getElementById("chevron2");
  const listBox = document.getElementById("listbox-appliances");

  dropdownAppliances.addEventListener("click", (e) => {
    const appliances = getAppliances(app.filteredRecipes);
    displayAppliancesDropdown(appliances);
  });
  chevron.addEventListener("click", (e) => {
    closeDropdownAppliance();
  });
  listBox.addEventListener("click", (e) => {
    if (!e.target.matches("li")) {
      return;
    }
    app.toggleTag(e.target.textContent, "appliance");

    closeDropdownAppliance();
  });
}
