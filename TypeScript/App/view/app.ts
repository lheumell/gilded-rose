const inquirer = require("inquirer");
import { InvalidOptionArgumentError } from "commander";
import InMemoryRepository from "../Repository/InMemoryRepository";
import Shop from "../Shop/ShopInteractor";
import OwnerFollowSold from "../Owner/OwnerFollowSold";
import InventoryInteractor from "../Inventory/InventoryInteractor";
import Console from "../Console/Console";
import ShopKeeper from "../ShopKeeper/ShopKeeper";
const repository = new InMemoryRepository();
const ownerFollowSold = new OwnerFollowSold(500);
const inventory = new InventoryInteractor(repository);
const shop = new Shop(inventory, ownerFollowSold);
const shopKeeper = new ShopKeeper(shop);

const consoleApp = new Console(shop);

const listInventory = shop.getItems().map((item) => {
  return item.getName();
});

const menuQuestion = [
  {
    type: "list",
    name: "menu_action",
    message: "Bonjour, en quoi puis je vous aider ?",
    choices: [
      "Regarder l'inventaire du magasin",
      "Suivre le solde du magasin",
      "Quitter",
    ],
  },
];

const shopQuestion = [
  {
    type: "list",
    name: "shop_menu",
    message: "Voici la liste des items que je dispose.",
    choices: listInventory,
  },
];

const shopKeeperQuestion = [
  {
    type: "list",
    name: "shop_keeper",
    message: "Que voulez vous faire ?",
    choices: ["Acheter", "Vendre", "Quitter"],
  },
];

async function prompt(questions) {
  let input: any;
  try {
    input = await inquirer.prompt(questions);
    console.log(input);
  } catch (error) {
    console.log(error);
  }
  return input;
}

async function setup() {
  menu();
}

async function menu() {
  const menuAction = await prompt(menuQuestion);
  const choix = menuAction.menu_action;
  switch (choix) {
    case "Regarder l'inventaire du magasin":
      const itemResponse = await prompt(shopQuestion);
      const itemSelected = shop.getItems().filter((element) => {
        return element.getName() == itemResponse.shop_menu;
      });
      console.log(itemSelected);
      const shopKeeperResponse = await prompt(shopKeeperQuestion);
      console.log(shopKeeperResponse.shop_keeper);
      switch (shopKeeperResponse.shop_keeper) {
        case "Acheter":
          shopKeeper.buyItem(itemSelected[0]);
          console.log(
            "Vous venez d'acheter " +
              itemSelected[0].getName() +
              " pour : " +
              itemSelected[0].getValue() +
              " pièces d'or"
          );
          break;
        case "Vendre":
          shopKeeper.sellItem(itemSelected[0]);
          console.log(
            "Vous venez de vendre " +
              itemSelected[0].getName() +
              " pour : " +
              itemSelected[0].getValue() +
              " pièces d'or"
          );

          break;
        case "Quitter":
          break;
        case "default":
          break;
      }
      menu();
      break;
    case "Suivre le solde du magasin":
      console.log(
        "Le solde du magasin est de : " +
          shop.getOwnerSold().getSold() +
          " pièces d'or"
      );
      menu();
      break;
    case "Quitter":
      console.log("Au revoir.");
      break;
    case "default":
      break;
  }
  // menu();
}

function quit() {}

setup();
