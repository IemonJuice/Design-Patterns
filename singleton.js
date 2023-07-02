class Singleton {
    constructor(someData) {
        if (Singleton.Instance) {
            throw new Error("Cannot create another instance of Singleton")
        } else {
            Singleton.Instance = true;
            this.someData = someData;
        }
    }

    method1() {
        console.log(`Data = ${this.someData}`)
    }
}

let firstInstance = new Singleton("data"); //successfully created
firstInstance.method1();

let secondInstance = new Singleton("another data"); //error
secondInstance.method1();   //error