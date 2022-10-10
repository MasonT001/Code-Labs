var Person = /** @class */ (function () {
    function Person() {
        this.favoriteColor = '';
    }
    Person.prototype.logFavoriteColor = function () {
        console.log(this.favoriteColor);
    };
    return Person;
}());
var p1 = new Person();
p1.favoriteColor = 'Blue';
p1.logFavoriteColor();
