import { recipes } from "./data/recipes.js";
import {
  closeDropdownIngredient,
  closeDropdownUtensil,
  closeDropdownDevice,
} from "./dropdown.js";
import { getItemIngredient } from "./interface.js";
import { filterTagIngredient } from "./tags.js";

function getIngredients() {
  let ingredientByRecipes = [];
  for (let index = 0; index < recipes.length; index++) {
    const lesingredients = recipes[index].ingredients;
    for (let i = 0; i < lesingredients.length; i++) {
      ingredientByRecipes.push(lesingredients[i].ingredient);
    }
  }
  return new Set(ingredientByRecipes);
}

var dropdownIngredientsIsClosed = true;

export function dropdownIngredients() {
  const dropdownIngredients = document.getElementById("listbox-nameIngredient");
  const chevron = document.getElementById("chevron1");
  const listBox = document.getElementById("listbox-ingredients");
  dropdownIngredients.addEventListener("click", (e) => {
    if (e.target) {
      closeDropdownDevice();
      closeDropdownUtensil();
    }
    dropdownIngredientsIsClosed = false;
    const ingredients = [...new Set(getIngredients())];
    document.getElementById("search-ingredients").style.display = "block";
    document.getElementById("listbox-nameIngredient").style.display = "none";
    document.getElementById("dropdownIngredients").style.width = "667px";
    listBox.innerHTML = `<ul>${getItemIngredient(ingredients)}</ul>`;
    filterTagIngredient();
  });
  chevron.addEventListener("click", () => {
    dropdownIngredientsIsClosed = true;
    closeDropdownIngredient();

    listBox.innerHTML = "";
    if (dropdownIngredientsIsClosed == true) {
    }
  });
}
