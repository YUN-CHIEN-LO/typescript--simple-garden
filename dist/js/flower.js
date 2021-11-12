function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
export class Flower {
    constructor(id, color) {
        this.id = id;
        this.color = color;
        this.height = 0;
        this.marginRight = `${rand(-10, 50)}px`;
        this.marginLeft = `${rand(-10, 50)}px`;
        this.transform = `translateY(${rand(-10, 10)}px) scale(${rand(8, 12) * 0.1}) ${rand(0, 1) ? "scaleX(1)" : "scaleX(-1)"}`;
        this.transitionDelay = `${rand(-5, 5)}px`;
        const gardenDOM = document.getElementById("garden");
        gardenDOM === null || gardenDOM === void 0 ? void 0 : gardenDOM.appendChild(this.render(this.height));
    }
    render(height) {
        const flowerTemplate = document
            .getElementsByTagName("template")[0]
            .content.cloneNode(true);
        const flowerDOM = flowerTemplate.childNodes[1];
        flowerDOM.className = `flower is-${this.color}`;
        flowerDOM.style.marginRight = this.marginRight;
        flowerDOM.style.marginLeft = this.marginLeft;
        flowerDOM.style.transform = this.transform;
        flowerDOM.style.transitionDelay = this.transitionDelay;
        this.height = height + 1 < 5 ? height + 1 : 5;
        flowerDOM.dataset.height = this.height.toString();
        flowerDOM.dataset.id = this.id.toString();
        flowerDOM.onclick = () => {
            this.grow(this.height);
        };
        return flowerTemplate;
    }
    grow(height) {
        const oldflowerDOM = document.querySelectorAll(`[data-id='${this.id}']`)[0];
        if (oldflowerDOM.parentNode)
            oldflowerDOM.parentNode.replaceChild(this.render(height), oldflowerDOM);
    }
}
//# sourceMappingURL=flower.js.map