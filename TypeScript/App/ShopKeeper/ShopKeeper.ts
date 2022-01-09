import Item from "../Item/Item";
import ShopInteractor from "../Shop/ShopInteractor";
import ShopKeeperBuyItem from "./IShopKeeperBuyItem";
import ShopKeeperSellItem from "./IShopKeeperSellItem";

class ShopKeeper implements ShopKeeperBuyItem, ShopKeeperSellItem {
  protected shop: ShopInteractor;
  protected excludedTypeItems: Array<String> = [];
  constructor(shop: ShopInteractor, excludedTypeItems: Array<String> = []) {
    this.shop = shop;
    this.excludedTypeItems = excludedTypeItems;
  }

  checkItemSellable(item: Item): boolean {
    return !this.excludedTypeItems.some(
      (element) => element == item.constructor.name
    );
  }

  sellItem(item: Item) {
    if (this.checkItemSellable(item)) {
      this.shop.getOwnerSold().increaseSold(item.getValue());
    }
  }
  buyItem(item: Item) {
    this.shop.getOwnerSold().descreaseSold(item.getValue());
  }
}

export default ShopKeeper;
