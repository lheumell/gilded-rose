class Item {
    name : string ;
    sellIn : number ; 
    quality : number ;
    conjured : boolean ;

    constructor(name: string, quality : number, sellIn: number) {
        this.name = name;
        this.quality = quality ;
        this.sellIn = sellIn ;
        this.conjured = false ;

    }


}

export default Item ;