import Item from "../Item";

class ConjuredItem extends Item {
  public constructor(name: string, sellIn: number, quality: number) {
    super(name, sellIn, quality);
  }

  public Update(): void {

    if (this.sellIn < 2) {
      this.quality -= 2;
    }
    else{
      this.quality -= 1;
    }
    this.sellIn -= 1;
    return;
  }
}

export default ConjuredItem;