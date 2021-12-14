import Shop from "../app/Shop";
import IItemRepository from "../app/Repository/ItemRepository";
import InMemoryRepository from "../app/Repository/InMemoryRepository";
const assert = require("assert");
const repository = new InMemoryRepository();

const shop = new Shop(repository);
shop.updateQuality();

describe("Gilded Rose Test", () => {
  it("Shop should have intentory", () => {
    assert.notEqual(shop.getItems(), null);
  });

  it("Shop number item", () => {
    assert.equal(shop.getNumberItem(), 8);
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
    assert.equal(shop.getItems()[6].getQuality(), 50);
  });

  it("Never update Sulfura", () => {
    assert.equal(shop.getItems()[3].getQuality(), 80);
  });

  it("Update generic item rare Quality", () => {
    assert.equal(shop.getItems()[5].getQuality(), 9); 
  });

  it("Update generic item rare Sellin", () => {
    assert.equal(shop.getItems()[5].getSellIn(), 9); 
  });

  it("Update Aged Brie quality", () => {
    assert.equal(shop.getItems()[1].getQuality(), 6); 
  });

  it("Update Aged Brie sellin", () => {
    assert.equal(shop.getItems()[1].getSellIn(), 9); 
  });

  it("Update quality for sellin -1", () => {
    assert.equal(shop.getItems()[7].getQuality(), 8); 
  });
});
