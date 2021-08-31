class Ninja {
    constructor(name, health=3, speed= 3, strength= 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(`Name: ${this.name}, Health: ${this.health}, Speed: ${this.speed}, Strength: ${this.strength}`);
    }
    drinkSake() {
        return this.health+= 10;
    }
}
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();

class Sensei extends Ninja {
    constructor(name, health=200, speed= 10, strength= 10) {
        super(name, health, speed, strength)
        this.wisdom = 10;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
    showStats() {
        super.showStats();
    }
}



const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();
// -> "Name: Master Splinter, Health: 210, Speed: 10, Strength: 10"