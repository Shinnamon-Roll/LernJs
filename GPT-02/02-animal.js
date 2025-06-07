export class Animal {
    constructor(name) {
        this.name = name
    }

    speak(){
        console.log(`Hi I'm ${this.name}.`)
    }
}