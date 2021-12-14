import Item from "../Item";

class AgedItem extends Item {
  public constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  public Update(): void {
    this.quality += 1;
    this.sellIn -= 1;
    return;
  }
}

export default AgedItem;
