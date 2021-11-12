import { Flower } from "./flower.js";
var Color;
(function (Color) {
    Color["red"] = "red";
    Color["yellow"] = "yellow";
    Color["blue"] = "blue";
    Color["white"] = "white";
})(Color || (Color = {}));
let myGarden = [];
let flowerId = 0;
const randomEnumValue = (enumeration) => {
    const values = Object.keys(enumeration);
    const enumKey = values[Math.floor(Math.random() * values.length)];
    return enumeration[enumKey];
};
const plantFlower = function () {
    const flower = new Flower(flowerId++, randomEnumValue(Color));
    myGarden.push(flower);
};
const clearGarden = function () {
    myGarden = [];
    const gardenDOM = document.getElementById("garden");
    gardenDOM.innerHTML = "";
};
const removeFlower = function () {
    myGarden.pop();
    const gardenDOM = document.getElementById("garden");
    for (let i = 0; i < 3; i++) {
        if (gardenDOM.lastChild) {
            gardenDOM.removeChild(gardenDOM.lastChild);
        }
    }
};
document.addEventListener("DOMContentLoaded", function (event) {
    const plantBtn = document.getElementById("plant");
    plantBtn.onclick = () => {
        plantFlower();
    };
    const clearBtn = document.getElementById("clear");
    clearBtn.onclick = () => {
        clearGarden();
    };
    const removeBtn = document.getElementById("remove");
    removeBtn.onclick = () => {
        removeFlower();
    };
});
//# sourceMappingURL=index.js.map