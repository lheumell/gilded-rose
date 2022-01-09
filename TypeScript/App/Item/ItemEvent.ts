import Item from "./Item";

class ItemEvent extends Item {
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
      this.quality = 0;
    } else if (this.sellIn <= 5) {
      this.quality += 3;
    } else if (this.sellIn <= 10) {
      this.quality += 2;
    } else {
      this.quality += 1;
    }
    this.sellIn -= 1;
    return;
  }
}

export default ItemEvent;
