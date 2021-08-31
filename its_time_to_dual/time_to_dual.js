
class Card {
    constructor(name, cost) {
        this.name= name;
        this.cost= cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        target.res-= this.power
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude) {
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play( target ) {
        if( target instanceof Unit ) {
            // implement card text here
            if (this.text == "Increase power") {
                target.power+= this.stat
                console.log(`The ${target.name} now has ${this.text} of ${target.power}`)
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const red_belt_ninja = new Card("Red Belt Ninja", 3);
const black_belt_ninja = new Card("Black Belt Ninja", 4);

