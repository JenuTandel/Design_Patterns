var PrintSpooler = /** @class */ (function () {
    function PrintSpooler() {
        this.printQueue = [];
        this.isPrinting = false;
    }
    PrintSpooler.getInstance = function () {
        if (!PrintSpooler.instance) {
            PrintSpooler.instance = new PrintSpooler();
        }
        return PrintSpooler.instance;
    };
    PrintSpooler.prototype.addToQueue = function (document) {
        this.printQueue.push(document);
        if (!this.isPrinting) {
            this.printNextDocument();
        }
    };
    PrintSpooler.prototype.printNextDocument = function () {
        var _this = this;
        if (this.printQueue.length > 0) {
            this.isPrinting = true;
            var nextdocument_1 = this.printQueue.shift();
            console.log("Printing: ".concat(nextdocument_1));
            setTimeout(function () {
                console.log("Finished printing: ".concat(nextdocument_1));
                _this.isPrinting = false;
                _this.printNextDocument();
            }, 2000);
        }
    };
    return PrintSpooler;
}());
var spooler = PrintSpooler.getInstance();
var spooler1 = PrintSpooler.getInstance();
var spooler2 = PrintSpooler.getInstance();
spooler.addToQueue("Document A");
spooler1.addToQueue("Document B");
spooler2.addToQueue("Document C");
