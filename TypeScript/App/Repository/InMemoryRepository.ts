import IItemRepository from "./ItemRepository";
import Item from "../Item";
import LegendaryItem from "../Items/LegendaryItem";
import GenericItems from "../Items/GenericItem";
import AgedItem from "../Items/AgedItem";
import EventItem from "../Items/EventItem";

class InMemoryRepository implements IItemRepository {
  private items: Array<Item> = [
    new GenericItems("Common", 10, 0),
    new AgedItem("Aged Brie", 10, 5),
    new EventItem("Backstage passes", 10, 5),
    new LegendaryItem("Sulfuras", 10, 80),
    new GenericItems("Epic", 20, 40),
    new GenericItems("Rare", 10, 10),
    new GenericItems("Bugged", 70, 90),
    new GenericItems("updated", -1, 10),
  ];

  getInventory(): Array<Item> {
    return this.items;
  }

  saveInventory(items: Array<Item>): void {}
}

export default InMemoryRepository;
