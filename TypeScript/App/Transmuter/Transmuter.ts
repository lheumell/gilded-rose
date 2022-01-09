import Item from "../Item/Item";
import ShopInteractor from "../Shop/ShopInteractor";

class Transmuter {
  private shop: ShopInteractor;

  constructor(shop: ShopInteractor) {
    this.shop = shop;
  }

  transmute(item : Item) {
    this.shop.getOwnerSold().increaseSold(100);
    item.decreaseQuality(10);
  }
}

export default Transmuter;
