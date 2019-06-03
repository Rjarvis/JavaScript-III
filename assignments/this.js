/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window use
* 2. implicit to an object use
* 3. in setting up a NEW object from a constructor use
* 4. explicit use in an object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sumNumber(sum1){
    console.log(sum1, this);
    return sum1;
}

sumNumber(3);

function sayName(name){
    console.log(name, this);
    return name;
}

sayName("roland");

// Principle 2

// code example for Implicit Binding
const aObj = {
    num1: 2,
    num2: 3,
    sum: this.num1 + this.num2,
    addNums: function(){
        console.log(`${this.num1} plus ${this.num2} equals ${this.sum}`);
        console.log(this);
    }
};

aObj.addNums();

// Principle 3

// code example for New Binding
function DogAGoodBoy(name){
    this.sound = 'bork';
    this.name = name;
    this.speak = function(){
        console.log(this.sound +' I am good boy '+ this.name+'!');
        console.log(this);
    };
};

const keno = new DogAGoodBoy('Keno');
const brian = new DogAGoodBoy('Brian');

keno.speak();
brian.speak();

// Principle 4

// code example for Explicit Binding
function Car(attributes){
    this.serial = attributes.serial;
    this.engine = attributes.engine;
    this.body = attributes.body;
    this.wheels = attributes.wheels;
    this.owner = attributes.owner;
    this.speak = function(){
        return `Hello ${this.owner}, my serial number is ${this.serial}, my wheels ${this.wheels}.`
    };
}

const kitt = new Car({
    serial: 'KITT',
    engine: 'the soul of Mr. Pheeny.',
    body: 'Camaro',
    wheels: 'are turbo capable',
    owner: 'David Hasselhoff',
});

const deloris = new Car({
    serial: 'FOXX',
    engine: 'Flux Capacitor',
    body: 'Delorean',
    wheels: 'don\'t need roads',
    owner: 'Brown PHD',
});

console.log(kitt);
console.log(kitt.speak());
console.log(deloris);
console.log(deloris.speak());