// classes are a syntax used for creating objects. They use a constructor method to set their own properties, when a new object is created, this object is called an instance of the class.

// Methods do not have , in between them like an object.

class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark(){
        console.log('woof!');
    }
}

let dog1 = new Dog('sammy', 29);
console.log(dog1);

dog1.bark();

//extending classes, any information that will be entered that alrwady existed in the previous class must be covered first by super(), you can then add more properties and methods.

class Wolf extends Dog {
    constructor (Doginfo){
        super(Doginfo);
        this.type = Doginfo.type;
    }
        howl() {
            console.log('a woooooo!');
        }    
}

const wolf1 = new Wolf({
    name: 'jack',
    age: 20,
    type: 'angry'
});

console.log(wolf1.howl());
