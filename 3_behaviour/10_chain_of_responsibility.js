class MySum {
    constructor(initialValue = 42) {
        this.sum = initialValue;
    }

    add(value) {
        this.sum += value;
        return this;
    }
}

let sum1 = new MySum();
console.log(sum1.add(1).add(3).add(4).sum);
