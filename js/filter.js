import { recipes } from "./data/recipes.js";
import { displayRecipes } from "./interface.js";

let item = document.getElementsByClassName("col-md-4");
let containerItem = document.querySelectorAll(".container-item__recipe");

export function keyWord() {
  let inputSearch = document.getElementById("searchbar");
  let listBoxLi = document.getElementsByClassName("listbox");

  inputSearch.addEventListener("keyup", () => {
    console.log("length", inputSearch.value.length);
    if (inputSearch.value.length < 3) {
      for (let index = 0; index < item.length; index++) {
        item[index].style.display = "block";
        document.getElementById("message").style.display = "none";
      }
    } else {
      for (let index = 0; index < recipes.length; index++) {
        const lesingredients = recipes[index].ingredients;
        for (let i = 0; i < lesingredients.length; i++) {
          var ingredientRecipeExist = lesingredients[i].ingredient
            .toLowerCase()
            .indexOf(inputSearch.value.toLowerCase());
        }
        const nameRecipeExist = recipes[index].name
          .toLowerCase()
          .indexOf(inputSearch.value.toLowerCase());
        const descriptionRecipeExist = recipes[index].description
          .toLowerCase()
          .indexOf(inputSearch.value.toLowerCase());
        console.log(nameRecipeExist == -1);
        console.log("val", nameRecipeExist == undefined);

        if (
          nameRecipeExist == -1 &&
          descriptionRecipeExist == -1 &&
          ingredientRecipeExist == -1
        ) {
          item[index].style.display = "none";
        }
        if (
          nameRecipeExist !== undefined &&
          descriptionRecipeExist !== undefined &&
          ingredientRecipeExist !== undefined
        ) {
          document.getElementById("message").style.display = "block";
        }
      }
    }
  });
}

export function filterDevice() {
  let inputSearch = document.getElementById("input-device");
  let listBoxLi = document.getElementsByClassName("listbox");
  inputSearch.addEventListener("keyup", () => {
    if (inputSearch.value.length >= 3) {
      for (let index = 0; index < listBoxLi.length; index++) {
        if (
          !listBoxLi[index].innerHTML.toLowerCase().includes(inputSearch.value)
        ) {
          listBoxLi[index].style.display = "none";
        } else {
          listBoxLi[index].style.display = "list-item";
        }
      }
    }
  });
}

export function filterIngredient() {
  let inputSearch = document.getElementById("input-ingredients");
  let listBoxLi = document.getElementsByClassName("listbox");
  console.log("ft", document.getElementsByClassName("listbox"));
  inputSearch.addEventListener("keyup", () => {
    if (inputSearch.value.length >= 3) {
      for (let index = 0; index < listBoxLi.length; index++) {
        if (
          !listBoxLi[index].innerHTML.toLowerCase().includes(inputSearch.value)
        ) {
          listBoxLi[index].style.display = "none";
        } else {
          listBoxLi[index].style.display = "list-item";
        }
      }
    }
  });
}

let inputSearchUtensils = document.getElementById("input-utensils");

export function filterUtensil() {
  // Quand je fais une recherche dans le dropdown, ça me laisse la liste correspondante
  let listBoxLi = document.getElementsByClassName("listbox");
  console.log("lp", listBoxLi);
  inputSearchUtensils.addEventListener("keyup", () => {
    if (inputSearchUtensils.value.length >= 3) {
      for (let index = 0; index < listBoxLi.length; index++) {
        if (
          !listBoxLi[index].innerHTML
            .toLowerCase()
            .includes(inputSearchUtensils.value)
        ) {
          listBoxLi[index].style.display = "none";
        } else {
          listBoxLi[index].style.display = "list-item";
        }
      }
    }
  });
}
