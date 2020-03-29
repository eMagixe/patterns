function networkFetch(url) {
    return `${url} - ответ сервера`;
}

let cache = new Set();
let proxiedFetch = new Proxy(networkFetch, {
    apply(target, thisArg, args) {
        let url = args[0];
        if(cache.has(url)) return `${url} - ответ из кеша`;
        else {
            cache.add(url);
            return Reflect.apply(target, thisArg, args);
        }
    }
});

console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('vue.io'));
console.log(proxiedFetch('angular.io'));
