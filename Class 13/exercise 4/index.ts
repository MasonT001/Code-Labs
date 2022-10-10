class Human {
    birthYear: number = 0;
    animal: Animal = new Animal(0)

    constructor(birthYear: number){
        this.birthYear = birthYear
    }

    ageDifference(){
        let diff = this.animal.birthYear - this.birthYear
        console.log(`The age difference between me and my animal is ${diff}`)
    }
}

class Animal {
    birthYear: number = 0;

    constructor(birthYear){
        this.birthYear = birthYear;
    }

}

let h1 = new Human(2000)
let a1 = new Animal(2015)
h1.animal = a1
console.log(h1.ageDifference())

