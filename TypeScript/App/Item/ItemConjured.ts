import Item from "./Item";

class ItemConjured extends Item {
  public constructor(
    name: string,
    sellIn: number,
    quality: number,
    value: number
  ) {
    super(name, sellIn, quality, value);
  }

  public Update(): void {
    if (this.sellIn < 0) {
      this.quality -= 4;
    } else {
      this.quality -= 2;
    }
    this.sellIn -= 1;
    return;
  }
}

export default ItemConjured;
