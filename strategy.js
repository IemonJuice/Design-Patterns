class abstractStrategy{
   getInfo(){
       return this.information
   }
}
class Strategy1 extends abstractStrategy{
    constructor() {
        super();
        this.information = 'Strategy 1'
    }
}
class Strategy2 extends abstractStrategy{
    constructor() {
        super();
        this.information = 'Strategy 2'
    }
}
class Strategy3 extends abstractStrategy{
    constructor() {
        super();
        this.information = 'Strategy 3 '
    }
}

class StrategyCheck{
    getStrategy(strategy){
        return strategy.information
    }
}
const strategyCheck = new StrategyCheck();

console.log(strategyCheck.getStrategy(new Strategy1()))
console.log(strategyCheck.getStrategy(new Strategy3()))
console.log(strategyCheck.getStrategy(new Strategy2()))
