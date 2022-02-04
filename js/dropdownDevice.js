import { closeDropdownDevice } from "./dropdown.js";
import { displayTags, renderDevicesDropdown, renderTag } from "./interface.js";

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
  const listBox = document.getElementById("listbox-devices");

  dropdownDevices.addEventListener("click", (e) => {
    const devices = getDevices(app.filteredRecipes);
    displayDevicesDropdown(devices);
  });
  chevron.addEventListener("click", (e) => {
    closeDropdownDevice();
  });
  listBox.addEventListener("click", (e) => {
    if (!e.target.matches("li")) {
      return;
    }
    app.toggleTag(e.target.textContent, "device");

    closeDropdownDevice();
  });
}
