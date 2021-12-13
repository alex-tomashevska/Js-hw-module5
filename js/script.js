// 1
const Account = function ({login, email}){
    this.login = login;
    this.email = email;
}
Account.prototype.getInfo = function (){
    console.log(`login: ${this.login}, email: ${this.email}`)
}

console.log(Account.prototype.getInfo);
const mango = new Account({
    login: 'Mangozedog',
    email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
    login: 'Poly',
    email: 'poly@mail.com',
});

poly.getInfo();



// 2
class User {
    constructor({name, age, followers}) {
        this.name = name;
        this.age = age;
        this.followers = followers;
    }
    getInfo() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.followers}`)

    }
}
const mang = new User({
    name: 'Mango',
    age: 2,
    followers: 20,
});

mang.getInfo();

const pol = new User({
    name: 'Poly',
    age: 3,
    followers: 17,
});

pol.getInfo();



// 3
class Storage {
    constructor(items) {
        this.items = items
    }

    getItems() {
        return this.items;
    }

    addItem(item) {
        return items.push(item);
    }

    // removeItem(item) {
    //   if(item = this.items){
    //     this.items -= item
    //   }
    // }

}

const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
])
const items = storage.getItems();
console.table(items);

storage.addItem('Дроид');
console.table(storage.items);

// storage.removeItem('Пролонгер');
// console.table(storage.items);


// 4
class StringBuilder {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
    append(str) {
        this.value = this.value + str;
    }
    prepend(str) {
        this.value = str + this.value;
    }
    pad(str) {
        this.value = str + this.value + str;
    }
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value); // '.^'

builder.prepend("^");
console.log(builder.value); // '^.^'

builder.pad("=");
console.log(builder.value); // '=^.^='


// 5
class Car {
    constructor(obj) {
        this.maxSpeed = obj.maxSpeed;
        this.speed = 0;
        this.price = obj.price;
        this.isOn = false;
        this.distance = 0;
    };

    static getSpecs(car){
        console.log(car)
    };
    getPrice(){
        return this.price;
    };
    setPrice(car){
        this.price = car;
    };
    turnOn(){
        this.isOn = true;
    };
    turnOff(){
        this.isOn = false;
        this.speed = 0;
    };
    accelerate(value){
        if (this.speed + value < this.maxSpeed){
            this.speed += value;
        }
    };
    decelerate(value){
        if (this.speed + value > 0){
            this.speed -= value
        }
    };
    drive(hours){
        if (this.isOn){
            this.distance += hours * this.speed
        }
    }
}
const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000