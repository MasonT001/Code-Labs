class Animal {
    name: string = ''
    age: number = 0
    location: Region = new Region()
}

class Region {
    name: string = ''
}

let place = new Region()
place.name = 'Africa'

let animal = new Animal()
animal.name = 'Johnny The Lion'
animal.age = 5
animal.location = place

console.log(animal.name)
console.log(animal.age)
console.log(animal.location)