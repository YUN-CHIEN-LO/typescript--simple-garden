import { Flower } from "./flower.js";
enum Color {
  red = "#E05D5D",
  yellow = "#FFB344",
  blue = "#00A19D",
  white = "#FFF8E5",
}

let myGarden = <Flower[]>[];
let flowerId = 0;

const plantFlower = function () {
  const flower = new Flower(flowerId++, "red", 1);
  myGarden.push(flower);
  renderGarden();
};

const renderGarden = function () {
  const gardenDOM = document.getElementById("garden") as HTMLElement;
  // 清空DOM
  gardenDOM.innerHTML = "";

  myGarden.forEach((x) => {
    const flowerTemplate = document
      .getElementsByTagName("template")[0]
      .content.cloneNode(true);

    // 插入DOM元件
    gardenDOM?.appendChild(flowerTemplate);
  });
};

document.addEventListener("DOMContentLoaded", function (event) {
  renderGarden();
  const plantBtn = document.getElementById("plant") as HTMLElement;
  plantBtn.onclick = () => {
    plantFlower();
  };
});
