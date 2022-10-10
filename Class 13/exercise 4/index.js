var Human = /** @class */ (function () {
    function Human(birthYear) {
        this.birthYear = 0;
        this.animal = new Animal(0);
        this.birthYear = birthYear;
    }
    Human.prototype.ageDifference = function () {
        var diff = this.animal.birthYear - this.birthYear;
        console.log("The age difference between me and my animal is ".concat(diff));
    };
    return Human;
}());
var Animal = /** @class */ (function () {
    function Animal(birthYear) {
        this.birthYear = 0;
        this.birthYear = birthYear;
    }
    return Animal;
}());
var h1 = new Human(2000);
var a1 = new Animal(2015);
h1.animal = a1;
console.log(h1.ageDifference());
