class Database {
    constructor(data) {
        if(Database.exists) return Database.instanse;
        Database.instanse = this;
        Database.exists = true;
        this.data = data;
    }

    getData() {
        return this.data;
    }
}

let mongo = new Database('MongoDB');
console.log(mongo.getData());

let mysql = new Database('MySQL');
console.log(mysql.getData());


