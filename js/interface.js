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
