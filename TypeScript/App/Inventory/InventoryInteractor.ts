import IItemRepository from "../Item/IItemRepository";
import InventoryUpdate from "./InventoryUpdate";
import InventoryViewer from "./InventoryViewer";
import Item from "../Item/Item";
import RelicItem from "../Item/ItemRelic";

class InventoryInteractor implements InventoryUpdate, InventoryViewer {
  private repository: IItemRepository;
  protected items: Array<Item> = [];
  protected itemsRelic: Array<RelicItem> = [];

  public constructor(repository: IItemRepository) {
    this.repository = repository;
    this.items = this.repository.getInventory();
    this.itemsRelic = this.repository.getItemsRelic();
  }

  updateInventory() {
    this.items.forEach((item) => {
      item.Update();
      item.verifQuality();
    });
    this.itemsRelic.forEach((item) => {
      item.Update();
      item.verifQuality();
    });
  }

  getInventory(): Array<Item> {
    return this.items;
  }

  getRelicItems(): Array<RelicItem> {
    return this.itemsRelic;
  }

  getInventoryByQuantity() {
    const inventoryByQuantity = {};
    const itemsName = this.items.map((item) => item.getName());
    itemsName.forEach((x) =>
     {
      inventoryByQuantity[x] = {quantity : (inventoryByQuantity[x] || 0) + 1};
    });
    return inventoryByQuantity;
  }
}

export default InventoryInteractor;
