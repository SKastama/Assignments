
class Card {
    constructor(name, cost) {
        this.name= name;
        this.cost= cost;
    }

    print() {
        console.log(`Card ${this.name}, ${this.cost}`);
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack(target) {
        if (target instanceof Unit) {
            target.res-= this.power;
            console.log(`${this.name} attacked ${target.name} for ${this.power} damage. ${target.name}'s resilience is now ${target.res}`)
        }
        else {
            throw new TypeError("Target must be an instance of Unit");
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, magnitude, stat) {
        super(name, cost);
        this.text = text;
        this.magnitude = magnitude;
        this.stat = stat;
    }
    play( target ) {
        if ( target instanceof Unit ) {
            // implement card text here
            const magnitudeDirection = this.magnitude < 0 ? "lowered" : "raised";
            target[stat] += this.magnitude;

            console.log(
                `${this.name} ${magnitudeDirection} ${this.stat} by ${this.magnitude}. ${target.name}'s ${this.stat} is now ${target[this.stat]}.`
            );
        } else {
            throw new TypeError("Target must be a Unit!")
        }
    }
}

const red_belt_ninja = new Unit("Redbelt-Ninja", 3, 3, 4);
const black_belt_ninja = new Unit("Blackbelt-Ninja", 4, 5, 5);

red_belt_ninja.attack(black_belt_ninja);
black_belt_ninja.attack(red_belt_ninja);

hardAlgorithm.play(red_belt_ninja);
pairProgramming.play(red_belt_ninja);


