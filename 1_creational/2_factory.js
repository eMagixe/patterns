class SimpleMembership {
    constructor(name) {
        this.name = name;
        this.cost = 50;
    }
}
class StandardMembership {
    constructor(name) {
        this.name = name;
        this.cost = 150;
    }
}
class PremiumMembership {
    constructor(name) {
        this.name = name;
        this.cost = 500;
    }
}

class MemberFactory {
    static list = {
        simple: SimpleMembership,
        standard: StandardMembership,
        premium: PremiumMembership
    };

    create(name, type = 'simple') {
        let Membership = MemberFactory.list[type] || MemberFactory.list.simple;
        let member = new Membership(name);
        member.type = type;
        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cost}`);
        }

        return member;
    }
}

let factory = new MemberFactory();

let members = [
    factory.create('Max', 'premium'),
    factory.create('Ivan', 'simple'),
    factory.create('Jone', 'standard')
]

members.forEach(member => member.define());
