//functional constructor
function Obj(data,another){
    this.data = data;
    this.another = another;
}

let obj = new Obj('data','another data')
console.log(obj.toString()); // [object Object] because it's an object :V

//ES2015
class AnotherObj {
    constructor(data,anotherData) {
        this.data = data;
        this.anotherData = anotherData;
    }
    showData(){
        console.log(this.data,this.anotherData)
    }
}
let instanceOfAnotherObj = new AnotherObj('qwerty','123')
instanceOfAnotherObj.showData();