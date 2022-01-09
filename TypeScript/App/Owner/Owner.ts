abstract class Owner {
  protected sold: number = 0;

  public constructor(sold: number) {
    this.sold = sold;
  }
}

export default Owner;
