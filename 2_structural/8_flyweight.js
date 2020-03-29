class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
}

class CarFactory {
    constructor() {
        this.cars = [];
    }

    create(model, price) {
        let candidate = this.getCar(model);
        if (candidate) return candidate;
        else return this.init(model, price);
    }

    init(model, price) {
        let car = new Car(model, price);
        this.cars.push(car);
        return car;
    }

    getCar(model) {
        return this.cars.find(car => car.model === model);
    }
}

let factory = new CarFactory();

let honda = factory.create('Honda', 10000);
let honda2 = factory.create('Honda', 15000);
let mazda = factory.create('Mazda', 20000);

console.log(honda);
console.log(honda2);
console.log(mazda);


