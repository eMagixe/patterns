class Employee {
    constructor(name, salary){
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}

    work() {
        return `${this.name} выполняет ${this.responsibilities()}`;
    }

    getPaid() {
        return `${this.name} имеет ЗП ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'процесс создания программ';
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    responsibilities() {
        return 'процесс тестирования';
    }
}

let developer = new Developer('Максим', 100000);

console.log(developer.getPaid());
console.log(developer.work());

let tester = new Tester('Виктория', 90000);

console.log(tester.getPaid());
console.log(tester.work());
