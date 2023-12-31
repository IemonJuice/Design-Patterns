class MacBookColor {
    color:string;
    constructor(color:string) {
        this.color = color
    }
  getColor(){
    return this.color;
  }
}

class macBook{
    color:MacBookColor;
    constructor(color:MacBookColor){
        this.color = color;
    }
    boot() {
        console.log(`mac has color ${this.color.getColor()}`)
    }
}
let  greyMacBook = new MacBookColor('red');
let myMacBook = new macBook(greyMacBook);
myMacBook.boot();
