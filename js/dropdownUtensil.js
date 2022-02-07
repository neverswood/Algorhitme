import { recipes } from "./data/recipes.js";
import { closeDropdownUtensil } from "./dropdown.js";
import { renderUtensilsDropdown } from "./interface.js";

export function getUtensils() {
  let ustensilsByRecipes = [];
  for (let index = 0; index < recipes.length; index++) {
    ustensilsByRecipes.push(recipes[index].ustensils);
  }
  const allUstensils = ustensilsByRecipes.flat();
  console.log("a", [...new Set(allUstensils)]);
  return [...new Set(allUstensils)];
}

function displayUtensilsDropdown(utensils) {
  const listBox = document.getElementById("listbox-utensils");
  document.getElementById("search-utensils").style.display = "block";
  document.getElementById("listbox-nameUtensils").style.display = "none";
  document.getElementById("dropdownUtensils").style.width = "667px";
  listBox.innerHTML = renderUtensilsDropdown(utensils);
}

export function bindUtensilsDropdownEventListeners(app) {
  const dropdownUtensils = document.getElementById("listbox-nameUtensils");
  const listBox = document.getElementById("listbox-utensils");

  const chevron = document.getElementById("chevron3");
  dropdownUtensils.addEventListener("click", () => {
    const utensils = getUtensils(app.filteredRecipes);
    displayUtensilsDropdown(utensils);
  });
  chevron.addEventListener("click", (e) => {
    closeDropdownUtensil();
    listBox.innerHTML = "";
  });
  listBox.addEventListener("click", (e) => {
    if (!e.target.matches("li")) {
      return;
    }
    app.toggleTag(e.target.textContent, "utensils");

    closeDropdownUtensil();
  });
}
