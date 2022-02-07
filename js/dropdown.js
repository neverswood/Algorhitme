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
  const listBox = document.getElementById("listbox-ingredients");
  listBox.innerHTML = "";
}

export function closeDropdownUtensil() {
  const listBox = document.getElementById("listbox-utensils");

  document.getElementById("search-utensils").style.display = "none";
  document.getElementById("listbox-nameUtensils").style.display = "flex";
  document.getElementById("dropdownUtensils").style.width = "135px";
  listBox.innerHTML = "";
}
