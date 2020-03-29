class Server {
    constructor(ip, port) {
        this.ip = ip;
        this.port = port;
    }

    get url() {
        return `https://${this.ip}:${this.port}`;
    }
}

function aws(server) {
    server.isAWS = true;
    server.awsInfo = function() {
        return server.url;
    }
    return server;
}

function azure(server) {
    server.isAzure = true;
    server.port += 500;
    return server;
}

let serverAws = aws(new Server('123.23.34.14', 8080));

console.log(serverAws.isAWS);
console.log(serverAws.awsInfo());

let serverAzure = azure(new Server('234.56.44.23', 1000));

console.log(serverAzure.isAzure);
console.log(serverAzure.url);