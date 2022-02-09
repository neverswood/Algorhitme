import { closeDropdownIngredient } from "./dropdown.js";
import { renderIngredientsDropdown } from "./interface.js";

function getIngredients(recipes) {
  let ingredientByRecipes = [];
  recipes.map((recipes) => {
    const ingredients = recipes.ingredients;
    ingredients.forEach((ingredients) => {
      ingredientByRecipes.push(ingredients.ingredient);
    });
  });
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
