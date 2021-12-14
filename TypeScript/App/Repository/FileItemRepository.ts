import ItemRepository from "../Repository/ItemRepository";
import Item from "../Item";
import LegendaryItem from "../Items/LegendaryItem";
import GenericItems from "../Items/GenericItem";
import AgedItem from "../Items/AgedItem";
import EventItem from "../Items/EventItem";

const itemsJson = require("../storage/items.json");

class FileItemsRepository implements ItemRepository {
  private items: Array<Item> = [];

  public constructor() { 
    itemsJson.GenericItems.forEach((item) => {
      this.items.push(new GenericItems(item.name, item.sellIn, item.quality));
    });
    itemsJson.AgedItem.forEach((item) => {
      this.items.push(new AgedItem(item.name, item.sellIn, item.quality));
    });
    itemsJson.EventItem.forEach((item) => {
      this.items.push(new EventItem(item.name, item.sellIn, item.quality));
    });
    itemsJson.LegendaryItem.forEach((item) => {
      this.items.push(new LegendaryItem(item.name, item.sellIn, item.quality));
    });
  }

  getInventory(): Array<Item> {
    return this.items;
  }

  saveInventory(items: Array<Item>): void {}
}

export default FileItemsRepository;
