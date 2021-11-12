import { Flower } from "./flower.js";

enum Color {
  red = "red",
  yellow = "yellow",
  blue = "blue",
  white = "white",
}

let myGarden = <Flower[]>[];
let flowerId = 0;

const randomEnumValue = (enumeration: any) => {
  const values = Object.keys(enumeration);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return enumeration[enumKey];
};

const plantFlower = function () {
  const flower = new Flower(flowerId++, randomEnumValue(Color));
  myGarden.push(flower);
};

const clearGarden = function () {
  myGarden = <Flower[]>[];
  const gardenDOM = document.getElementById("garden") as HTMLElement;
  gardenDOM.innerHTML = "";
};
const removeFlower = function () {
  myGarden.pop();
  const gardenDOM = document.getElementById("garden") as HTMLElement;
  for (let i = 0; i < 3; i++) {
    if (gardenDOM.lastChild) {
      gardenDOM.removeChild(gardenDOM.lastChild);
    }
  }
};
document.addEventListener("DOMContentLoaded", function (event) {
  const plantBtn = document.getElementById("plant") as HTMLElement;
  plantBtn.onclick = () => {
    plantFlower();
  };
  const clearBtn = document.getElementById("clear") as HTMLElement;
  clearBtn.onclick = () => {
    clearGarden();
  };
  const removeBtn = document.getElementById("remove") as HTMLElement;
  removeBtn.onclick = () => {
    removeFlower();
  };
});
