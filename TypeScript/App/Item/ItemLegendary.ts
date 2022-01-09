import Item from "./Item";

class ItemLegendary extends Item {
  public constructor(
    name: string,
    sellIn: number,
    quality: number = 80,
    value: number
  ) {
    super(name, sellIn, quality, value);
    this.quality = 80;
  }

  public Update(): void {
    this.quality = 80;
    return;
  }

  public verifQuality() {
    if (this.quality != 80) {
      this.quality = 80;
    }
  }
}

export default ItemLegendary;
