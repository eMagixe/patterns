class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }

    get url() {
        return `https://${this.ip}:80`;
    }
}

let aws = new Server('AWS German', '80.81.23.123');

console.log(aws.url);
