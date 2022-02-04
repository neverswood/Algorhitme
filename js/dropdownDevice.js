import { closeDropdownDevice } from "./dropdown.js";
import { renderDevicesDropdown } from "./interface.js";
import { filterTagDevice } from "./tags.js";

export function getDevices(recipes) {
  let deviceByRecipes = [];
  for (let index = 0; index < recipes.length; index++) {
    deviceByRecipes.push(recipes[index].appliance);
  }
  const allDevices = deviceByRecipes.flat();

  return [...new Set(allDevices)];
}

export function displayDevicesDropdown(devices) {
  const listBox = document.getElementById("listbox-devices");
  const searchDevice = document.getElementById("search-device");
  searchDevice.style.display = "block";
  document.getElementById("listbox-nameDevice").style.display = "none";
  document.getElementById("dropdownDevice").style.width = "667px";
  listBox.innerHTML = renderDevicesDropdown(devices);
}

//bind = brancher, connecté
export function bindDevicesDropdownEventListeners(app) {
  const dropdownDevices = document.getElementById("listbox-nameDevice");
  const chevron = document.getElementById("chevron2");
  dropdownDevices.addEventListener("click", (e) => {
    const devices = getDevices(app.filteredRecipes);
    displayDevicesDropdown(devices);

    filterTagDevice();
  });
  chevron.addEventListener("click", (e) => {
    closeDropdownDevice();
  });
}
