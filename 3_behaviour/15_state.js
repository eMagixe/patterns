class Light {
    constructor(light) {
        this.light = light;
    }
}

class RedLight extends Light {
    constructor() {
        super('red');
    }

    sign() {
        return 'СТОП';
    }
}
class YellowLight extends Light {
    constructor() {
        super('yellow');
    }

    sign() {
        return 'ПРИГОТОВСЯ';
    }
}

class GreenLight extends Light {
    constructor() {
        super('green');
    }

    sign() {
        return 'ВПЕРЕД';
    }
}

class TrafficLight {
    constructor() {
        this.states = [
            new RedLight(),
            new YellowLight(),
            new GreenLight()
        ];
        this.current = this.states[0];
    }

    change() {
        let total = this.states.length;
        let index = this.states.findIndex(taken => taken === this.current);

        if (index + 1 < total) {
            this.current = this.states[index + 1];
        } else {
            this.current = this.states[0];
        }
    }

    sign() {
        return this.current.sign();
    }
}

let traffic = new TrafficLight();

console.log(traffic.sign());
traffic.change();
console.log(traffic.sign());
traffic.change();
console.log(traffic.sign());
traffic.change();