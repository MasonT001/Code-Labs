class Animal {
    name: string = ''
    age: number = 0
    location: string = ''
}

class Locationn {
    name: string = ''
}

let place = new Locationn()
place.name = 'Africa'

let animal = new Animal()
animal.name = 'Johnny The Lion'
animal.age = 5
animal.location = 'Africa'

console.log(place.name)
console.log(animal.name)
console.log(animal.age)
console.log(animal.location)