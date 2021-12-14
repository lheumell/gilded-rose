import Item from "../Item";

class LegendaryItem extends Item {
  public constructor(name: string, sellIn: number, quality: number = 80) {
    super(name, sellIn, quality);
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

export default LegendaryItem;
