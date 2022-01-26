import { recipes } from "./data/recipes.js";
import { getItemDevice } from "./interface.js";

function getDevice() {
  let deviceByRecipes = [];
  for (let index = 0; index < recipes.length; index++) {
    deviceByRecipes.push(recipes[index].appliance);
  }
  const allDevices = deviceByRecipes.flat();

  return new Set(allDevices);
}

var dropdownDeviceIsClosed = true;

export function dropdownDevices() {
  const dropdownDevices = document.getElementById("listbox-nameDevice");
  const chevron = document.getElementById("chevron2");
  const listBox = document.getElementById("listbox-devices");
  const searchDevice = document.getElementById("search-device");
  dropdownDevices.addEventListener("click", (e) => {
    searchDevice.style.display = "block";
    dropdownDeviceIsClosed = false;
    const devices = [...new Set(getDevice())];
    document.getElementById("listbox-nameDevice").style.display = "none";
    document.getElementById("dropdownDevice").style.width = "667px";
    listBox.innerHTML = `<ul>${getItemDevice(devices)}</ul>`;
  });
  chevron.addEventListener("click", (e) => {
    dropdownDeviceIsClosed = true;
    document.getElementById("search-device").style.display = "none";
    document.getElementById("listbox-nameDevice").style.display = "flex";
    listBox.innerHTML = "";
  });
}
