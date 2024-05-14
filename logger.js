var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.getInstance = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    Logger.prototype.log = function (message) {
        console.log("Log: " + message);
    };
    return Logger;
}());
var logger1 = Logger.getInstance();
logger1.log("Logger 1");
var logger2 = Logger.getInstance();
logger2.log("Logger 2");
console.log(logger1 === logger2);
