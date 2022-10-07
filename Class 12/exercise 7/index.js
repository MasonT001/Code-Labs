var Animal = /** @class */ (function () {
    function Animal() {
        this.name = '';
        this.age = 0;
        this.location = '';
    }
    return Animal;
}());
var Locationn = /** @class */ (function () {
    function Locationn() {
        this.name = '';
    }
    return Locationn;
}());
var place = new Locationn();
place.name = 'Africa';
var animal = new Animal();
animal.name = 'Johnny The Lion';
animal.age = 5;
animal.location = 'Africa';
console.log(place.name);
console.log(animal.name);
console.log(animal.age);
console.log(animal.location);
