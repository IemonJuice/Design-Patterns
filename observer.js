//calculator observer :)
class Stream {
    constructor() {
        this.observers = []
    }

    subscribe(observer) {
        this.observers.push(observer)
    }

    unsubscribe(fn) {
        this.observers = this.observers.filter((observer) => {
            return observer !== fn
        })
    }

    fire(data) {
        this.observers.forEach((observer) => {
            observer.update(data)
        })
    }
}

class Observer {
    constructor(state) {
        this.state = state;
        this.initialState = state;
    }

    update(data) {
        switch (data.type) {
            case 'ADD': {
                this.state += data.num;
                break;
            }
            case 'SUB': {
                this.state -= data.num;
                break;
            }
            case 'MUL': {
                this.state *= data.num;
                break;
            }
            case 'DIV': {
                this.state /= data.num;
                break;
            }
            default:
                this.state = this.initialState
        }
    }
}

const publisher = new Stream()
const subject1 = new Observer(112);
const subject2 = new Observer(1);

publisher.subscribe(subject1)
publisher.subscribe(subject2)

publisher.fire({type: "ADD", num: 21})
publisher.fire({type: "MUL", num: 21})
publisher.fire({type: "SUB", num: 2772})
publisher.fire({type: "DIV", num: 2772})

console.log(subject1.state)
console.log(subject2.state)

