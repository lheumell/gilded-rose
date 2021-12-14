import Item from "../Item";

interface IItemRepository {
  getInventory(): Array<Item>;

  saveInventory(items: Array<Item>): void;
}

export default IItemRepository;
