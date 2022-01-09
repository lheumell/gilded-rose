import IItemRepository from "../Item/IItemRepository";
import Item from "../Item/Item";
import LegendaryItem from "../Item/ItemLegendary";
import GenericItems from "../Item/ItemGeneric";
import AgedItem from "../Item/ItemAged";
import EventItem from "../Item/ItemEvent";
import RelicItem from "../Item/ItemRelic";

const itemsJson = require("../storage/items.json");

class FileItemsRepository implements IItemRepository {
  private items: Array<Item> = [];
  private itemsRelic : Array<RelicItem> = [];

  public constructor() {
    itemsJson.GenericItems.forEach((item) => {
      this.items.push(
        new GenericItems(item.name, item.sellIn, item.quality, item.value)
      );
    });
    itemsJson.AgedItem.forEach((item) => {
      this.items.push(
        new AgedItem(item.name, item.sellIn, item.quality, item.value)
      );
    });
    itemsJson.EventItem.forEach((item) => {
      this.items.push(
        new EventItem(item.name, item.sellIn, item.quality, item.value)
      );
    });
    itemsJson.LegendaryItem.forEach((item) => {
      this.items.push(
        new LegendaryItem(item.name, item.sellIn, item.quality, item.value)
      );
    });
  }
  getItemsRelic(): Array<RelicItem>{
    return this.itemsRelic;
  }
  getInventory(): Array<Item> {
    return this.items;
  }

  saveInventory(items: Array<Item>): void {}
}

export default FileItemsRepository;
