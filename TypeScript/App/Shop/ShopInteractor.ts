import InventoryInteractor from "../Inventory/InventoryInteractor";
import OwnerFollowSold from "../Owner/OwnerFollowSold";

class ShopInteractor {
  protected inventory: InventoryInteractor;
  protected ownerFollowSold: OwnerFollowSold;
  public constructor(
    inventory: InventoryInteractor,
    ownerFollowSold: OwnerFollowSold
  ) {
    this.inventory = inventory;
    this.ownerFollowSold = ownerFollowSold;
  }

  public updateQuality() {
    this.inventory.getInventory().forEach((item) => {
      item.Update();
      item.verifQuality();
    });
    return;
  }

  public getItems() {
    return this.inventory.getInventory();
  }

  public getItemsRelic(){
    return this.inventory.getRelicItems();
  }

  public getOwnerSold(){
    return this.ownerFollowSold;
  }
}

export default ShopInteractor;
