class RelicItem {
  protected name: string = "";
  protected quality: number = 0;
  protected value: number = 0;
  public constructor(name: string, quality: number, value: number) {
    this.name = name;
    this.quality = quality;
    this.value = value;
  }

  public Update() : void{
    this.quality += this.quality * 0.05;
  }

  public getQuality() {
    return this.quality;
  }

  public verifQuality() {
    if (this.quality < 0) {
      this.quality = 0;
    } else if (this.quality > 100) {
      this.quality = 100;
    }
  }
}
export default RelicItem;
