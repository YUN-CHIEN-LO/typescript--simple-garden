import { rand } from "./utils.js";
export class Flower {
    /**
     * 建構子
     *
     * @param {number} id - 序號
     * @param {string} color - 顏色
     */
    constructor(id, color) {
        this.id = id;
        this.color = color;
        this.height = 0;
        // 指定樣式
        this.marginRight = `${rand(-10, 50)}px`;
        this.marginLeft = `${rand(-10, 50)}px`;
        this.transform = `translateY(${rand(-10, 10)}px) scale(${rand(8, 12) * 0.1}) ${rand(0, 1) ? "scaleX(1)" : "scaleX(-1)"}`;
        this.transitionDelay = `${rand(-5, 5)}px`;
        // 插入DOM
        const gardenDOM = document.getElementById("garden");
        gardenDOM === null || gardenDOM === void 0 ? void 0 : gardenDOM.appendChild(this.render(this.height));
    }
    /**
     * 渲染
     *
     * @param {number} height - 高度
     * @returns {HTMLElement} 花DOM
     */
    render(height) {
        // 取得template
        const flowerTemplate = document
            .getElementsByTagName("template")[0]
            .content.cloneNode(true);
        // 掛style
        const flowerDOM = flowerTemplate.childNodes[1];
        flowerDOM.className = `flower is-${this.color}`;
        flowerDOM.style.marginRight = this.marginRight;
        flowerDOM.style.marginLeft = this.marginLeft;
        flowerDOM.style.transform = this.transform;
        flowerDOM.style.transitionDelay = this.transitionDelay;
        // 設定data attr
        this.height = height + 1 < 5 ? height + 1 : 5;
        flowerDOM.dataset.height = this.height.toString();
        flowerDOM.dataset.id = this.id.toString();
        // 掛載監聽事件
        flowerDOM.onclick = () => {
            this.grow(this.height);
        };
        return flowerTemplate;
    }
    /**
     * 長高
     *
     * @param {number} height - 新的高度
     */
    grow(height) {
        // 取得指定花的DOM
        const oldflowerDOM = document.querySelectorAll(`[data-id='${this.id}']`)[0];
        // 取代DOM
        if (oldflowerDOM.parentNode)
            oldflowerDOM.parentNode.replaceChild(this.render(height), oldflowerDOM);
    }
}
//# sourceMappingURL=flower.js.map