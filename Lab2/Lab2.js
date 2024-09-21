// Exercise 1

let greeter = (myArray, counter) => {
    let greetText = 'Hello ';

    for (let name of myArray) {
        console.log(greetText + name);
    }
}

console.log("Exercise 1:")
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan']);

// Exercise 2

let capitalizeFirstLetter = (str) => {
    const [first, ...rest] = str;
    return first.toUpperCase() + rest.join('');
}

console.log("Exercise 2:")
console.log(capitalizeFirstLetter('fooBar'));
console.log(capitalizeFirstLetter('nodeJs'));

// Exercise 3

const color = ['red', 'green', 'blue'];
let capitalizedColors = (color) => {return color.map(color => capitalizeFirstLetter(color));}
console.log("Exercise 3:");
console.log(capitalizedColors(color));

// Exercise 4

const values = [1, 60, 34, 30, 20, 5];
let filterLessThan20 = (values) => {return values.filter(values => values < 20);}
console.log("Exercise 4:");
console.log(filterLessThan20(values));

// Exercise 5

const array = [1, 2, 3, 4];
let calculateSum = (array) => {
    return array.reduce((a, b) => a + b);
}
let calculateProduct = (array) => {
    return array.reduce((a, b) => a * b);
}


console.log("Exercise 5:");
console.log(calculateSum(array));
console.log(calculateProduct(array));

// Exercise 6

class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }

    getCarInfo() {
        return `Model: ${this.model}, Engine: ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }

    getSedanInfo() {
        return `${this.getCarInfo()}, has a balance of : $${this.balance}`;
    }
}

console.log("Exercise 6:");
const car1 = new Car('Pontiac Firebird', 1976);
const sedan = new Sedan('Volvo SD', 2018, 300000);
console.log(car1.getCarInfo());
console.log(sedan.getSedanInfo());