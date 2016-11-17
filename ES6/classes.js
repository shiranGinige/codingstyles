
class Vehicle {

    constructor(color) {
        this.color = color;
    }
}

class Car extends Vehicle {

    constructor(color) {
        super(color);
    }
}

/*usage 

const myCar = new Car("red")

*/