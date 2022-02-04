import { recipes } from "./data/recipes.js";
import { displayRecipes } from "./interface.js";
import { getDevices } from "./dropdownDevice.js";

export function keyWord(app) {
  let inputSearch = document.getElementById("searchbar");
  inputSearch.addEventListener("keyup", () => {
    app.setKeyword(inputSearch.value);
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
  let listBoxLi = document.getElementsByClassName("listbox");
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
