import Item from "./Item";

class ItemAged extends Item {
  public constructor(
    name: string,
    sellIn: number,
    quality: number,
    value: number
  ) {
    super(name, sellIn, quality, value);
  }

  public Update(): void {
    this.quality += 1;
    this.sellIn -= 1;
    return;
  }
}

export default ItemAged;
