class DefaultClass {
    constructor(field1, field2) {
        this.field1 = field1
        this.field2 = field2
    }

    log() {
        console.log(this.field1, this.field2)
    }
}

function DecoratingFunction(decoratedClass) {
    decoratedClass.field3 = "lorem"
    decoratedClass.logAddedField = () => {
        console.log(decoratedClass.field3);
    }
    return decoratedClass;
}
//class wuthout decorator
let defaultClass = new DefaultClass('some info', 'another info')
defaultClass.log();

//using decorator over default class
let decoratedClass = DecoratingFunction(new DefaultClass('some info', 'another info'))

decoratedClass.log()
decoratedClass.logAddedField();