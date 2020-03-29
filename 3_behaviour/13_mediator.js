class User {
    constructor(name) {
        this.name = name;
        this.room = null;
    }

    send(message, to) {
        this.room.send(message, this, to);
    }

    receive(message, from) {
        console.log(`${from.name} => ${this.name}: ${message}`);
    }
}

class ChatRoom {
    constructor() {
        this.users = {}
    }

    register(user) {
        this.users[user.name] = user;
        user.room = this;
    }

    send(message, from, to) {
        if(to) to.receive(message, from);
        else {
            for(let key in this.users) {
                if(this.users[key] !== from) {
                    this.users[key].receive(message, from);
                }
            }
        }
    }
}

let max = new User('Max');
let vlad = new User('Vlad');
let lena = new User('Elena');

let room = new ChatRoom();

room.register(max);
room.register(vlad);
room.register(lena);

max.send('Hello!', lena);
vlad.send('Hello all!');
lena.send('Hello Max)', max);