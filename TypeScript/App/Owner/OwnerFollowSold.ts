import Owner from "./Owner";
class OwnerFollowSold extends Owner {
  public constructor(sold: number) {
    super(sold);
  }
  public getSold() {
    return this.sold;
  }

  public increaseSold(amount){
    this.sold += amount;
  }

  public descreaseSold(amount){
    this.sold-= amount;
  }
}

export default OwnerFollowSold;
