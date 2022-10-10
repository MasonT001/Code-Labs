var Animal = /** @class */ (function () {
    function Animal() {
        this.name = '';
        this.age = 0;
        this.location = new Region();
    }
    return Animal;
}());
var Region = /** @class */ (function () {
    function Region() {
        this.name = '';
    }
    return Region;
}());
var place = new Region();
place.name = 'Africa';
var animal = new Animal();
animal.name = 'Johnny The Lion';
animal.age = 5;
animal.location = place;
console.log(place.name);
console.log(animal.name);
console.log(animal.age);
console.log(animal.location);
