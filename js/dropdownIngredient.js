import { closeDropdownIngredient } from "./dropdown.js";
import { renderIngredientsDropdown } from "./interface.js";

function getIngredients(recipes) {
  let ingredientByRecipes = [];
  for (let index = 0; index < recipes.length; index++) {
    const lesingredients = recipes[index].ingredients;
    for (let i = 0; i < lesingredients.length; i++) {
      ingredientByRecipes.push(lesingredients[i].ingredient);
    }
  }
  const ingredient = ingredientByRecipes.flat();
  return [...new Set(ingredient)];
}

export function displayIngredientsDropdown(ingredients) {
  const listBox = document.getElementById("listbox-ingredients");
  const searchIngredient = document.getElementById("search-ingredients");
  searchIngredient.style.display = "block";
  document.getElementById("listbox-nameIngredient").style.display = "none";
  document.getElementById("dropdownIngredients").style.width = "667px";
  listBox.innerHTML = renderIngredientsDropdown(ingredients);
}

export function bindIngredientsDropdownEventListeners(app) {
  const dropdownIngredients = document.getElementById("listbox-nameIngredient");
  const listBox = document.getElementById("listbox-ingredients");
  const chevron = document.getElementById("chevron1");

  dropdownIngredients.addEventListener("click", (e) => {
    const ingredients = getIngredients(app.filteredRecipes);
    displayIngredientsDropdown(ingredients);
  });
  chevron.addEventListener("click", () => {
    closeDropdownIngredient();
  });
  listBox.addEventListener("click", (e) => {
    if (!e.target.matches("li")) {
      return;
    }
    app.toggleTag(e.target.textContent, "ingredients");

    closeDropdownIngredient();
  });
}
