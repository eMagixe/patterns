let car = {
    wheels: 4,

    init() {
        console.log(`У меня есть ${this.wheels} колеса. Мой владелец ${this.owner}`);
    }
}

let carWithOwner = Object.create(car, {
    owner: {
        value: 'Дмитрий'
    }
});

carWithOwner.init();