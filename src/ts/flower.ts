interface IFlower {
  id: number;
  color: string;
  height: number;
  grow(): void;
}

export class Flower implements IFlower {
  id: number;
  color: string;
  height: number;

  constructor(id: number, color: string, height: number) {
    this.id = id;
    this.color = color;
    this.height = height;
  }

  grow(): void {
    this.height++;
  }
}