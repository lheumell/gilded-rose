import Item from "./Item"

let agedBrie = new Item("Aged Brie", 10, 10) ;
let sulfuras = new Item("Sulfuras", 80, 10) ;
let potion = new Item("Potion", 10, 10) ;
let backstagePasses = new Item("Backstage Passes", 10, 10) ;

let array = [agedBrie, sulfuras, potion, backstagePasses] ;


const degradationQuality = 1 ;
const degradationSellIn = 1 ;

function updateQuality(item: Item) {
        
    if (item.quality < 0) {
        item.quality = 0 ;
    }

    if (item.quality > 50) {
        item.quality = 0 ;
    }


    if (item.name == "Aged Brie" || item.name == "Sulfuras" || item.name == "Backstage Passes") {
           if (item.name == "Aged Brie") {
            item.quality += degradationQuality 
        }

        if (item.name == "Sulfuras") {
            item.quality = 80
        }

        if (item.name == "Backstage Passes") {  
            if (item.sellIn <= 10) {
                item.quality += degradationQuality * 2 ;
            }
            else if (item.sellIn <= 5) {
                item.quality += degradationQuality * 3 ;
            }
            else if (item.sellIn = 0) {
                item.quality = 0 ;
            }
        }
    }else {

        if (item.sellIn == 0)  { 
            item.quality =  item.quality - degradationQuality * 2 ;
        }

      
        item.quality = item.quality - degradationQuality
    }

    item.sellIn = item.sellIn - degradationSellIn

   

   
        
}

for (var i = 0; i < 20 ; i++) {
    array.forEach(el => {
        updateQuality(el) ;
        console.log(el.name, el.quality, el.sellIn)
    })
}
