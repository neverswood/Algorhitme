import { recipes } from "./data/recipes.js";
import { closeDropdownDevice } from "./dropdown.js";

let item = document.getElementsByClassName("col-md-4");

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

      // bindCloseTag();
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

      // bindCloseTag();
    });
  }
}
