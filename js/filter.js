export function keyWord(app) {
  let inputSearch = document.getElementById("searchbar");
  inputSearch.addEventListener("keyup", () => {
    app.setKeyword(inputSearch.value);
  });
}

export function filterAppliance() {
  let inputSearch = document.getElementById("input-appliance");
  let listBoxLi = document.getElementsByClassName("listbox");
  inputSearch.addEventListener("keyup", () => {
    if (inputSearch.value.length >= 3) {
      for (let index = 0; index < listBoxLi.length; index++) {
        if (inputSearch.value.length >= 3) {
          if (
            !listBoxLi[index].innerHTML
              .toLowerCase()
              .includes(inputSearch.value)
          ) {
            listBoxLi[index].style.display = "none";
          } else {
            listBoxLi[index].style.display = "list-item";
          }
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
