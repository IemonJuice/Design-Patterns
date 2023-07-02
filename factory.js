class FactoryObj1 {
    constructor(firstData) {
        this.firstData = firstData;
        this.secondData = 1000
    }
}

class FactoryObj2 {
    constructor(firstData) {
        this.firstData = firstData;
        this.secondData = 2000
    }
}

class FactoryObj3 {
    constructor(firstData) {
        this.firstData = firstData;
        this.secondData = 3000
    }
}

class Factory {
    static list = {
        object1: FactoryObj1,
        object2: FactoryObj2,
        object3: FactoryObj3
    }

    create(firstData, object = 'object1') {
        const CurrentObject = Factory.list[object] || Factory.list.object1;
        const NewObject = new CurrentObject(firstData);
        NewObject.firstData = firstData;
        NewObject.log = () => {
            console.log(this.firstData, this.secondData)
        }
        return NewObject;
    }
}

const factory = new Factory();
const objects = [
    factory.create('1', 'object1'),
    factory.create('2', 'object2'),
    factory.create('3', 'object3'),
]

console.log(objects)