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
      Array.from(listBoxLi).map((listBoxLi) => {
        if (inputSearch.value.length >= 3) {
          if (!listBoxLi.innerHTML.toLowerCase().includes(inputSearch.value)) {
            listBoxLi.style.display = "none";
          } else {
            listBoxLi.style.display = "list-item";
          }
        }
      });
    }
  });
}

export function filterIngredient() {
  let inputSearch = document.getElementById("input-ingredients");
  let listBoxLi = document.getElementsByClassName("listbox");
  inputSearch.addEventListener("keyup", () => {
    if (inputSearch.value.length >= 3) {
      Array.from(listBoxLi).map((listBoxLi) => {
        if (!listBoxLi.innerHTML.toLowerCase().includes(inputSearch.value)) {
          listBoxLi.style.display = "none";
        } else {
          listBoxLi.style.display = "list-item";
        }
      });
    }
  });
}

export function filterUtensil() {
  let inputSearchUtensils = document.getElementById("input-utensils");
  let listBoxLi = document.getElementsByClassName("listbox");
  inputSearchUtensils.addEventListener("keyup", () => {
    if (inputSearchUtensils.value.length >= 3) {
      Array.from(listBoxLi).map((listBoxLi) => {
        if (
          !listBoxLi.innerHTML.toLowerCase().includes(inputSearchUtensils.value)
        ) {
          listBoxLi.style.display = "none";
        } else {
          listBoxLi.style.display = "list-item";
        }
      });
    }
  });
}
