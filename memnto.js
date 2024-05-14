// Memento class - stores the clipboard state
var ClipboardMemento = /** @class */ (function () {
    function ClipboardMemento(content) {
        this.content = content;
    }
    ClipboardMemento.prototype.getContent = function () {
        return this.content;
    };
    return ClipboardMemento;
}());
// Originator class - manages clipboard content
var ClipboardManager = /** @class */ (function () {
    function ClipboardManager() {
        this.clipboardContent = "";
        this.history = [];
    }
    ClipboardManager.prototype.cut = function (text) {
        this.clipboardContent = text;
        this.history.push(new ClipboardMemento(text));
    };
    ClipboardManager.prototype.copy = function (text) {
        this.clipboardContent = text;
    };
    ClipboardManager.prototype.paste = function () {
        return this.clipboardContent;
    };
    ClipboardManager.prototype.undo = function () {
        var lastState = this.history.pop();
        if (lastState) {
            this.clipboardContent = lastState.getContent();
        }
    };
    return ClipboardManager;
}());
// Usage
var clipboard = new ClipboardManager();
clipboard.copy("Hello, World!");
console.log("Clipboard Content:", clipboard.paste());
clipboard.cut("Goodbye!");
console.log("Clipboard Content:", clipboard.paste());
clipboard.undo();
console.log("Clipboard Content (After Undo):", clipboard.paste());
