import { recipes } from "./data/recipes.js";

export function filterTagUtensil() {
  // quand je clic sur un element de la liste il s'affiche en tag
  let listBox = document.getElementById("listbox-utensils");
  let listBoxLi = document.getElementsByClassName("listbox");
  let list = listBox.querySelectorAll("li");
  for (let index = 0; index < list.length; index++) {
    listBoxLi[index].addEventListener("click", (event) => {
      let tag = document.getElementById("tag");
      let divTag = document.createElement("div");
      divTag.setAttribute("class", "tag tag-utensil");
      let spanTag = document.createElement("span");
      spanTag.setAttribute("class", "spanTag");
      divTag.innerHTML = event.target.textContent;
      spanTag.innerHTML = `<i class="far fa-times-circle circle"></i>`;
      tag.appendChild(divTag);
      divTag.appendChild(spanTag);

      closeTag();
    });
  }
}

export function filterTagIngredient() {
  // quand je clic sur un element de la liste il s'affiche en tag
  let listBox = document.getElementById("listbox-ingredients");
  let listBoxLi = document.getElementsByClassName("listbox");
  let list = listBox.querySelectorAll("li");
  for (let index = 0; index < list.length; index++) {
    listBoxLi[index].addEventListener("click", (event) => {
      let tag = document.getElementById("tag");
      let divTag = document.createElement("div");
      divTag.setAttribute("class", "tag tag-ingredient");
      let spanTag = document.createElement("span");
      spanTag.setAttribute("class", "spanTag");
      divTag.innerHTML = event.target.textContent;
      spanTag.innerHTML = `<i class="far fa-times-circle circle"></i>`;
      tag.appendChild(divTag);
      divTag.appendChild(spanTag);

      closeTag();
    });
  }
}

export function filterTagDevice(e) {
  // quand je clic sur un element de la liste il s'affiche en tag
  let listBox = document.getElementById("listbox-devices");
  let listBoxLi = document.getElementsByClassName("listbox");
  let list = listBox.querySelectorAll("li");
  for (let index = 0; index < list.length; index++) {
    listBoxLi[index].addEventListener("click", (event) => {
      let tag = document.getElementById("tag");
      let divTag = document.createElement("div");
      divTag.setAttribute("class", "tag tag-device");
      let spanTag = document.createElement("span");
      spanTag.setAttribute("class", "spanTag");
      divTag.innerHTML = event.target.textContent;
      tripartag(event.target.textContent);
      spanTag.innerHTML = `<i class="far fa-times-circle circle"></i>`;
      tag.appendChild(divTag);
      divTag.appendChild(spanTag);
      console.log("target", event.target.textContent);
      closeTag();

      for (let index = 0; index < recipes.length; index++) {
        const lesingredients = recipes[index].ingredients;
        for (let i = 0; i < lesingredients.length; i++) {
          console.log("bobyhou", event.target.textContent);
          var ingredientRecipeExist = lesingredients[i].ingredient
            .toLowerCase()
            .includes("event.target.textContent.value");
        }
        const nameRecipeExist = recipes[index].name
          .toLowerCase()
          .includes("event.target.textContent.value");
        const descriptionRecipeExist = recipes[index].description
          .toLowerCase()
          .includes("event.target.textContent.value");
        console.log("index", descriptionRecipeExist.value);
        if (
          nameRecipeExist == -1 &&
          descriptionRecipeExist == -1 &&
          ingredientRecipeExist == -1
        ) {
          document.getElementsByClassName("col-md-4")[index].style.display =
            "none";
          let containerItem = document.getElementById("container-item");
          let message = document.createElement("div");
          message.innerHTML =
            "Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes », « poisson », etc.";
          containerItem.appendChild(message);
        }
      }
    });
  }
}

function closeTag() {
  let span = document.querySelectorAll(".spanTag");

  for (let index = 0; index < span.length; index++) {
    span[index].addEventListener("click", (e) => {
      e.target.closest(".tag").remove();
    });
  }
}
