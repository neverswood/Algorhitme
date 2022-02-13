export function bindKeyWordEventListeners(app) {
  let inputSearch = document.getElementById("searchbar");
  inputSearch.addEventListener("keyup", () => {
    app.setKeyword(inputSearch.value);
  });
}

export function filterDropdown(type) {
  let inputSearch = document.getElementById(`input-${type}`);
  let listBoxLi = document.getElementsByClassName("listbox");
  console.log("jio", inputSearch);
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
