class Animal {
    constructor(name) {
        this.name = name
    }

    speak() {
        console.log(`Hi I'm ${this.name}`)
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woooooof!")
    }
}

const myDog = new Dog("Milo")
myDog.speak()
myDog.bark()