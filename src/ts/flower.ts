interface IFlower {
  id: number;
  color: string;
  height: number;
  marginRight: string;
  marginLeft: string;
  transform: string;
  transitionDelay: string;
  grow(height: number): void;
  render(height: number): void;
}

function rand(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export class Flower implements IFlower {
  id: number;
  color: string;
  height: number;
  marginRight: string;
  marginLeft: string;
  transform: string;
  transitionDelay: string;

  constructor(id: number, color: string) {
    this.id = id;
    this.color = color;
    this.height = 0;
    this.marginRight = `${rand(-10, 50)}px`;
    this.marginLeft = `${rand(-10, 50)}px`;
    this.transform = `translateY(${rand(-10, 10)}px) scale(${
      rand(8, 12) * 0.1
    }) ${rand(0, 1) ? "scaleX(1)" : "scaleX(-1)"}`;
    this.transitionDelay = `${rand(-5, 5)}px`;

    const gardenDOM = document.getElementById("garden") as HTMLElement;
    gardenDOM?.appendChild(this.render(this.height));
  }

  render(height: number) {
    const flowerTemplate = document
      .getElementsByTagName("template")[0]
      .content.cloneNode(true);
    const flowerDOM = flowerTemplate.childNodes[1] as HTMLElement;
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

  grow(height: number) {
    const oldflowerDOM = document.querySelectorAll(
      `[data-id='${this.id}']`
    )[0] as HTMLElement;
    if (oldflowerDOM.parentNode)
      oldflowerDOM.parentNode.replaceChild(this.render(height), oldflowerDOM);
  }
}
