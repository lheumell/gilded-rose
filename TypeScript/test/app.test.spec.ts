import InventoryInteractor from "../app/Inventory/InventoryInteractor";
import OwnerFollowSold from "../app/Owner/OwnerFollowSold";
import Shop from "../app/Shop/ShopInteractor";
import ShopKeeper from "../app/ShopKeeper/ShopKeeper";
import InMemoryRepository from "../app/Repository/InMemoryRepository";
import Transmuter from "../app/Transmuter/Transmuter";

const assert = require("assert");
let repository: InMemoryRepository;
let inventory: InventoryInteractor;
let ownerFollowSold: OwnerFollowSold;
let shop: Shop;
let shopKeeper: ShopKeeper;
let transmuter: Transmuter;

describe("Item test", () => {
  before(() => {
    repository = new InMemoryRepository();
    inventory = new InventoryInteractor(repository);
    ownerFollowSold = new OwnerFollowSold(500);
    shop = new Shop(inventory, ownerFollowSold);
    shopKeeper = new ShopKeeper(shop);
    shop.updateQuality();
  });
  it("Should have sell in on item", () => {
    assert.notEqual(shop.getItems()[0].getSellIn(), null);
  });

  it("Should have quality on item", () => {
    assert.notEqual(shop.getItems()[0].getQuality(), null);
  });

  it("Never negative quality", () => {
    assert.equal(shop.getItems()[0].getQuality(), 0);
  });

  it("Never quality over fifty", () => {
    assert.equal(shop.getItems()[2].getQuality(), 50);
  });

  it("Generic item decrease one quality", () => {
    assert.equal(shop.getItems()[1].getQuality(), 9);
  });

  it("Generic item quality decrease by one", () => {
    assert.equal(shop.getItems()[1].getSellIn(), 9);
  });

  it("Generic item sellin decrease by one", () => {
    assert.equal(shop.getItems()[1].getSellIn(), 9);
  });

  it("Generic item quality decrease by two if sellIn is negative", () => {
    assert.equal(shop.getItems()[3].getQuality(), 8);
  });

  it("Aged item increase quality by one", () => {
    assert.equal(shop.getItems()[4].getQuality(), 6);
  });

  it("Aged item can't increase quality over fifty", () => {
    assert.equal(shop.getItems()[5].getQuality(), 50);
  });

  it("Aged item can't increase quality over fifty", () => {
    assert.equal(shop.getItems()[5].getQuality(), 50);
  });

  it("Never update Sulfura", () => {
    assert.equal(shop.getItems()[6].getQuality(), 80);
  });

  it("Event item quality increase by 2 when there are ten days or less", () => {
    assert.equal(shop.getItems()[7].getQuality(), 7);
  });

  it("Event item quality increase by 3 when there are five days or less", () => {
    assert.equal(shop.getItems()[8].getQuality(), 8);
  });

  it("Event item quality decrease to 0 when peremtpion date passed", () => {
    assert.equal(shop.getItems()[9].getQuality(), 0);
  });

  it("Conjured item quality decrease by two", () => {
    assert.equal(shop.getItems()[10].getQuality(), 3);
  });

  it("Conjured item quality decrease by four if date passed", () => {
    assert.equal(shop.getItems()[11].getQuality(), 1);
  });

  it("Have Relic Item", () => {
    assert.notEqual(inventory.getRelicItems(), null);
  });

  it("Relic item increase quality by five percent", () => {
    inventory.updateInventory();
    assert.equal(inventory.getRelicItems()[0].getQuality(), 52.5);
  });
  after(() => {});
});

describe("Shop", () => {
  before(() => {
    repository = new InMemoryRepository();
    inventory = new InventoryInteractor(repository);
    ownerFollowSold = new OwnerFollowSold(500);
    shop = new Shop(inventory, ownerFollowSold);
    shopKeeper = new ShopKeeper(shop);
  });
  it("Shop have sold", () => {
    assert.equal(shop.getOwnerSold().getSold(), 500);
  });
});

describe("Shop keeper", () => {
  beforeEach(() => {
    repository = new InMemoryRepository();
    inventory = new InventoryInteractor(repository);
    ownerFollowSold = new OwnerFollowSold(500);
    shop = new Shop(inventory, ownerFollowSold);
    shopKeeper = new ShopKeeper(shop, ['ItemLegendary']);
  });

  it("Sell items with 200 value", () => {
    shopKeeper.sellItem(shop.getItems()[0]);
    assert.equal(shop.getOwnerSold().getSold(), 700);
  });

  it("Not sellable legendary item", () => {
    shopKeeper.sellItem(shop.getItems()[6]);
    assert.equal(shop.getOwnerSold().getSold(), 500);
  });

  it("Buy items with 100 value", () => {
    shopKeeper.buyItem(shop.getItems()[1]);
    assert.equal(shop.getOwnerSold().getSold(), 400);
  });
});

describe("Transmuter", () => {
  before(() => {
    repository = new InMemoryRepository();
    inventory = new InventoryInteractor(repository);
    ownerFollowSold = new OwnerFollowSold(500);
    shop = new Shop(inventory, ownerFollowSold);
    shopKeeper = new ShopKeeper(shop);
    transmuter = new Transmuter(shop);
  });
  it("Gain one hundred gold after transmute", () => {
    transmuter.transmute(shop.getItems()[12]);
    assert.equal(shop.getOwnerSold().getSold(), 600);
  });

  it("Item quality decreased by ten", () => {
    transmuter.transmute(shop.getItems()[12]);
    assert.equal(shop.getItems()[12].getQuality(), 0);
  });
});

describe("Inventory", () => {
  before(() => {
    repository = new InMemoryRepository();
    inventory = new InventoryInteractor(repository);
    ownerFollowSold = new OwnerFollowSold(500);
    shop = new Shop(inventory, ownerFollowSold);
    shopKeeper = new ShopKeeper(shop);
    transmuter = new Transmuter(shop);
  });

  it("Have items", () => {
    assert.notEqual(inventory.getInventory(), null);
  });

  it("Have relic items", () => {
    assert.notEqual(inventory.getRelicItems(), null);
  });

  it("Inventory by quantity", () => {
    // assert.equal(inventory.getInventoryByQuantity()["Common"], 2);
  });
});
