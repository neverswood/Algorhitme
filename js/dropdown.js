export function closeDropdownInactive(e) {
  let dropdownButton = document.querySelectorAll(".dropdown-listbox__name");
  let dropdown = document.getElementById("dropdown");
  let searchDropdown = document.querySelectorAll(".search-dropdown");
  searchDropdown.style.display = "none";
  dropdownButton.style.display = "none";
  /*for (let button of dropdownButton) {
    button.addEventListener("click", list);

    function list(e) {
      let key = e.target.className;
      let listbox = dropdownButton[key];
      if (listbox) {
        searchDropdown.textContent = listbox;
      }
    }
  }*/
}

export function closeDropdownAppliance() {
  const listBox = document.getElementById("listbox-appliances");

  document.getElementById("search-appliance").style.display = "none";
  document.getElementById("listbox-nameAppliance").style.display = "flex";
  document.getElementById("dropdownAppliance").style.width = "135px";
  listBox.innerHTML = "";
}

export function closeDropdownIngredient() {
  document.getElementById("search-ingredients").style.display = "none";
  document.getElementById("listbox-nameIngredient").style.display = "flex";
  document.getElementById("dropdownIngredients").style.width = "135px";
}

export function closeDropdownUtensil() {
  document.getElementById("search-utensils").style.display = "none";
  document.getElementById("listbox-nameUtensils").style.display = "flex";
  document.getElementById("dropdownUtensils").style.width = "135px";
}
