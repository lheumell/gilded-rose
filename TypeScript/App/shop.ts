import ItemRepository from "./Repository/ItemRepository"
import Item from "./Item";
class Shop {
  private items: Array<Item> = [];
  private repository: ItemRepository;
  public constructor(repository: ItemRepository) {
    this.repository = repository;
    this.items = this.repository.getInventory();
  }

  public updateQuality() {
    this.items.forEach((item) => {
      item.Update();
      item.verifQuality();
    });
    return;
  }

  public getItems() {
    return this.items;
  }

  public getNumberItem() {
    return this.items.length;
  }
}

export default Shop;