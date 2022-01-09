abstract class Item {
  protected name: string = "";
  protected sellIn: number = 0;
  protected quality: number = 0;
  protected value: number = 0;

  public constructor(
    name: string,
    sellIn: number,
    quality: number,
    value: number
  ) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.value = value;
  }

  public abstract Update(): void;

  public verifQuality() {
    if (this.quality < 0) {
      this.quality = 0;
    } else if (this.quality > 50) {
      this.quality = 50;
    }
  }

  public showInfoItem(): string {
    const sentences = `Nom de l'item ${this.name}\nQualité : ${this.quality}\nJours avant péremption : ${this.quality}`;
    return sentences;
  }

  public getValue(): number {
    return this.value;
  }
  public getName(): string {
    return this.name;
  }
  public getQuality(): number {
    return this.quality;
  }
  public decreaseQuality(amount: number): void {
    this.quality -= amount;
    this.verifQuality();
  }
  public getSellIn(): number {
    return this.sellIn;
  }
}

export default Item;
