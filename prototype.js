let obj3 = {
    data1: "data123",
    data2: 123,
    logData() {
        console.log(this.data1, this.data2)
    }
}

let anotherObj = Object.create(obj3, {
    data: {
        anotherData: "DATA"
    },
})
anotherObj.logData();


let obj2 = {
    objName: "ObjectName",
    objId: 2,
    logName(){
        console.log(this.objName);
    }
}
obj2.logName()
Object.prototype.log123 = () => {
    console.log(123);
}
obj2.log123();