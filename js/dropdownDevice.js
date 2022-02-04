import { recipes } from "./data/recipes.js";
import {
  closeDropdownDevice,
  closeDropdownIngredient,
  closeDropdownUtensil,
} from "./dropdown.js";
import { filterDevicesByRecipes } from "./filter.js";
import { renderDevicesDropdown } from "./interface.js";
import { filterTagDevice } from "./tags.js";

export function getDevices() {
  let deviceByRecipes = [];
  for (let index = 0; index < recipes.length; index++) {
    deviceByRecipes.push(recipes[index].appliance);
  }
  const allDevices = deviceByRecipes.flat();

  return new Set(allDevices);
}

var dropdownDeviceIsClosed = true;

export function getDeviceWithRecipes() {
  let devicesByRecipes = [];
}

export function dropdownDevices() {
  const dropdownDevices = document.getElementById("listbox-nameDevice");
  const chevron = document.getElementById("chevron2");
  const listBox = document.getElementById("listbox-devices");
  const searchDevice = document.getElementById("search-device");
  let searchDropdown = document.querySelectorAll(".search-dropdown");
  let dropdownButton = document.querySelectorAll(".dropdown-listbox__name");

  dropdownDevices.addEventListener("click", (e) => {
    searchDevice.style.display = "block";
    console.log("oijoijoij", e.target);
    if (e.target) {
      closeDropdownUtensil();
      closeDropdownIngredient();
    }
    dropdownDeviceIsClosed = false;
    const devices = filterDevicesByRecipes();
    document.getElementById("listbox-nameDevice").style.display = "none";
    document.getElementById("dropdownDevice").style.width = "667px";
    listBox.innerHTML = renderDevicesDropdown(devices);
    filterTagDevice();
  });
  chevron.addEventListener("click", (e) => {
    dropdownDeviceIsClosed = true;
    closeDropdownDevice();
    listBox.innerHTML = "";
  });
}
