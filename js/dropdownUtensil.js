import { recipes } from "./data/recipes.js";
import {
  closeDropdownAppliance,
  closeDropdownIngredient,
  closeDropdownUtensil,
} from "./dropdown.js";
import { renderUtensilsDropdown } from "./interface.js";
import { filterTagUtensil } from "./tags.js";

export function getUtensils() {
  let ustensilsByRecipes = [];
  for (let index = 0; index < recipes.length; index++) {
    ustensilsByRecipes.push(recipes[index].ustensils);
  }
  const allUstensils = ustensilsByRecipes.flat();
  console.log("a", [...new Set(allUstensils)]);
  return [...new Set(allUstensils)];
}

var dropdownUtensilsIsClosed = true;

export function dropdownUtensils(e) {
  const dropdownUtensils = document.getElementById("listbox-nameUtensils");
  const chevron = document.getElementById("chevron3");
  const listBox = document.getElementById("listbox-utensils");
  dropdownUtensils.addEventListener("click", (e) => {
    if (e.target) {
      closeDropdownAppliance();
      closeDropdownIngredient();
    }
    dropdownUtensilsIsClosed = false;
    const utensils = getUtensils();
    document.getElementById("search-utensils").style.display = "block";
    document.getElementById("listbox-nameUtensils").style.display = "none";
    document.getElementById("dropdownUtensils").style.width = "667px";
    listBox.innerHTML = renderUtensilsDropdown(utensils);
    filterTagUtensil();
  });
  chevron.addEventListener("click", (e) => {
    dropdownUtensilsIsClosed = true;
    closeDropdownUtensil();
    listBox.innerHTML = "";
  });
}
