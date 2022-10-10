var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.logRandomNumber = function () {
        console.log(Math.random() * 1000);
    };
    Logger.prototype.logRandomColor = function () {
        var colors = ["red", 'orange', 'yellow', 'blue', 'green'];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        console.log(randomColor);
    };
    Logger.prototype.logTo100 = function () {
        for (var i = 0; i < 100; i++) {
            console.log(i);
        }
    };
    return Logger;
}());
var n = new Logger();
n.logTo100();
n.logRandomColor();
n.logRandomNumber();
