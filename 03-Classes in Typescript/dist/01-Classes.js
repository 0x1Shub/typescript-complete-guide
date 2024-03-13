"use strict";
class Player {
    constructor(height, weight) {
        this.myHeight = () => {
            return this.height;
        };
        this.height = height;
        this.weight = weight;
    }
}
const john = new Player(175, 85);
console.log(john.myHeight());
class Player1 {
    constructor(height, weight, power) {
        this.height = height;
        this.weight = weight;
        this.power = power;
        this.id = String(Math.random() * 100);
    }
    get getMyHeight() {
        return this.height;
    }
    set changeHeight(val) {
        this.height = val;
    }
}
class Player2 extends Player1 {
    constructor(height, weight, power, special) {
        super(height, weight, power);
        this.getMyPower = () => this.power;
        this.special = special;
    }
}
