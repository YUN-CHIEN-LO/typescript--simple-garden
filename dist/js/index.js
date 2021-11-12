import { Flower } from "./flower.js";
var Color;
(function (Color) {
    Color["red"] = "#E05D5D";
    Color["yellow"] = "#FFB344";
    Color["blue"] = "#00A19D";
    Color["white"] = "#FFF8E5";
})(Color || (Color = {}));
let myGarden = [];
let flowerId = 0;
const plantFlower = function () {
    const flower = new Flower(flowerId++, "red", 1);
    myGarden.push(flower);
    renderGarden();
};
const renderGarden = function () {
    const gardenDOM = document.getElementById("garden");
    // 清空DOM
    gardenDOM.innerHTML = "";
    myGarden.forEach((x) => {
        const flowerTemplate = document
            .getElementsByTagName("template")[0]
            .content.cloneNode(true);
        // 插入DOM元件
        gardenDOM === null || gardenDOM === void 0 ? void 0 : gardenDOM.appendChild(flowerTemplate);
    });
};
document.addEventListener("DOMContentLoaded", function (event) {
    renderGarden();
    const plantBtn = document.getElementById("plant");
    plantBtn.onclick = () => {
        plantFlower();
    };
});
//# sourceMappingURL=index.js.map