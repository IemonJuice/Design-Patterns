//proxy object
const person = {
    name: 'joey',
    age: 21,
    number: 123,
}
const ProxyPerson = new Proxy(person, {
    set(target, prop, value) {
        console.log(target)
        console.log(prop)
    },
    get(target, prop) {
        console.log(target)
        console.log(prop)
    },
    deleteProperty(target, prop) {
        console.log("deleted property", prop, target[prop]);
    }
})

//proxy func
let func = function (args) {
    return args
}
const ProxyFunc = new Proxy(func, {
    apply(target, thisArg, argArray) {

            return argArray.map((element)=>{
                if(typeof element ==='string'){
                    return element.toUpperCase();
                }
                else if(typeof element === 'boolean'){
                    return element
                }
                else if(typeof element ==='number'){
                    return element*10;
                }
            })
    }
})

console.log(ProxyFunc(1,2,3,4,5,'lorem IpsuM',true))

//proxy class
class Calculator {
    constructor(num1,num2,operation) {
        this.num1 = num1;
        this.num2 = num2;
        this.operation = operation;
    }
    makeCulc() {
        switch (this.operation) {
            case '+': {
                return this.num1 + this.num2;
                break;
            }

            case '-': {
                return this.num1 - this.num2;
                break;
            }

            case '*': {
                return this.num1 * this.num2;
                break;
            }

            case '/': {
                return this.num1 / this.num2;
                break;
            }
        }
    }
}
const classProxy = new Proxy(Calculator, {
    construct(target, prop, Value) {
        console.log('Instance created')
    },
    set(target, p, newValue, receiver) {
        console.log(`setting ${target[p]} = ${newValue}`)
    }
})
let calculator = new classProxy(1,2,'+');

