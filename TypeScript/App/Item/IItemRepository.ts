import Item from "./Item";
import RelicItem from "./ItemRelic";

interface IItemRepository {
  getItemsRelic(): Array<RelicItem>;
  
  getInventory(): Array<Item>;

  saveInventory(items: Array<Item>): void;
}

export default IItemRepository;
