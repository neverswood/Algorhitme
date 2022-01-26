function displayIngredients(ingredients) {
  let item = "";
  for (let index = 0; index < ingredients.length; index++) {
    item += `<li>${ingredients[index].ingredient}: 
        <span>${ingredients[index].quantity ?? ""} ${
      ingredients[index].unit ?? ""
    }</span></li>`;
  }
  return item;
}

export function displayRecipes(recipe) {
  const containerRecipe = document.getElementById("container-item");
  const containerDiv = document.createElement("div");
  containerDiv.setAttribute("class", "col-md-4");
  const templateRecipe = `
            <div class="container-item__recipe" id="${recipe.id}">
            <div class="divEmpty"></div>
            <div class="recipe">
            <div class="recipe__header">
            <h3>${recipe.name}</h3>
            <span><i class="far fa-clock"></i> ${recipe.time} min</span>
            </div>
            <div class="recipe__explanation">
            <div class="recipe__ingrédients">
            ${displayIngredients(recipe.ingredients)}
            </div>
            <div class="recipe__description">
            ${recipe.description}...</div>
            </div>
            </div>
            </div>
            `;
  containerRecipe.appendChild(containerDiv);
  containerDiv.innerHTML = templateRecipe;
}

export function getItemUtensil(utensils) {
  let item = "";
  for (let index = 0; index < utensils.length; index++) {
    item += `<li class="listbox">${utensils[index]}</li>`;
  }
  return item;
}

export function getItemIngredient(ingredient) {
  let item = "";
  for (let index = 0; index < ingredient.length; index++) {
    item += `<li class="listbox">${ingredient[index]}</li>`;
  }
  return item;
}

export function getItemDevice(devices) {
  let item = "";
  for (let index = 0; index < devices.length; index++) {
    item += `<li class="listbox">${devices[index]}</li>`;
  }
  return item;
}
