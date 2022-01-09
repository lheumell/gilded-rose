import IItemRepository from "../Item/IItemRepository";
import Item from "../Item/Item";
import LegendaryItem from "../Item/ItemLegendary";
import GenericItems from "../Item/ItemGeneric";
import AgedItem from "../Item/ItemAged";
import EventItem from "../Item/ItemEvent";
import ConjuredItem from "../Item/ItemConjured";
import RelicItem from "../Item/ItemRelic";

class InMemoryRepository implements IItemRepository {
  private items: Array<Item> = [
    new GenericItems("Common worst quality", 10, 0, 200),
    new GenericItems("Common", 10, 10, 100),
    new GenericItems("Bug", 10, 70, 20),
    new GenericItems("Common negative sellin", -1, 10, 20),
    new AgedItem("Aged Brie", 10, 5, 20),
    new AgedItem("Aged Brie best quality", 10, 50, 20), //5
    new LegendaryItem("Sulfuras", 10, 80, 20),
    new EventItem("Backstage passes 10 days left", 10, 5, 20),
    new EventItem("Backstage passes 5 days left", 5, 5, 20),
    new EventItem("Backstage passes date passed", -1, 5, 20),
    new ConjuredItem("Conjured item", 5, 5, 20), //10
    new ConjuredItem("Conjured item date passed", -1, 5, 20),
    new GenericItems("Common", 20, 20, 50),
  ];

  private itemsRelic : Array<RelicItem> = [
    new RelicItem("Relic Item", 50, 10),
  ]

  getItemsRelic() : Array<RelicItem> {
    return this.itemsRelic;
  }

  getInventory(): Array<Item> {
    return this.items;
  }

  saveInventory(items: Array<Item>): void {}
}

export default InMemoryRepository;
