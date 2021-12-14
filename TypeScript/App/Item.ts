abstract class Item {
    protected name: string = "";
    protected sellIn: number = 0;
    protected quality: number = 0;
  
    public constructor(name: string, sellIn: number, quality: number) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
    }
  
    public abstract Update(): void;
  
    public verifQuality() {
      if (this.quality < 0) {
        this.quality = 0;
      } else if (this.quality > 50) {
        this.quality = 50;
      }
    }
  
    public getName(): string {
      return this.name;
    }
    public getQuality(): number {
      return this.quality;
    }
    public getSellIn(): number {
      return this.sellIn;
    }
  
    public setSellIn(amout: number): void {
      return;
    }
  }
  
  export default Item;