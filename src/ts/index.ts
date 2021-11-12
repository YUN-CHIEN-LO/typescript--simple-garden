import { Flower } from "./flower.js";
import { randomEnumValue } from "./utils.js";

// 花的顏色
enum Color {
  red = "red",
  yellow = "yellow",
  blue = "blue",
  white = "white",
}

let myGarden = <Flower[]>[];
let flowerId = 0;

/**
 * 種花
 */
const plantFlower = function () {
  // 新增Flower物件
  const flower = new Flower(flowerId++, randomEnumValue(Color));
  myGarden.push(flower);
};

/**
 * 清除整座花園
 */
const clearGarden = function () {
  // 清除陣列
  myGarden = <Flower[]>[];
  // 移除DOM元件
  const gardenDOM = document.getElementById("garden") as HTMLElement;
  gardenDOM.innerHTML = "";
};

/**
 * 移除上一朵花
 */
const removeFlower = function () {
  // 清除陣列
  myGarden.pop();
  // 移除DOM元件
  const gardenDOM = document.getElementById("garden") as HTMLElement;
  for (let i = 0; i < 3; i++) {
    if (gardenDOM.lastChild) {
      gardenDOM.removeChild(gardenDOM.lastChild);
    }
  }
};

/**
 * 監聽頁面在入
 */
document.addEventListener("DOMContentLoaded", function (event) {
  // 監聽種花事件
  const plantBtn = document.getElementById("plant") as HTMLElement;
  plantBtn.onclick = () => {
    plantFlower();
  };

  // 監聽清除整座花園的事件
  const clearBtn = document.getElementById("clear") as HTMLElement;
  clearBtn.onclick = () => {
    clearGarden();
  };

  // 監聽移除上一朵花的事件
  const removeBtn = document.getElementById("remove") as HTMLElement;
  removeBtn.onclick = () => {
    removeFlower();
  };
});
