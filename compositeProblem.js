var MyFile = /** @class */ (function () {
    function MyFile(size) {
        this.size = size;
    }
    MyFile.prototype.getSize = function () {
        return this.size;
    };
    return MyFile;
}());
var Folder = /** @class */ (function () {
    function Folder() {
        this.files = [];
        this.folders = [];
    }
    Folder.prototype.addFile = function (file) {
        this.files.push(file);
    };
    Folder.prototype.addFolder = function (folder) {
        this.folders.push(folder);
    };
    Folder.prototype.getSize = function () {
        var totalSize = 0;
        for (var _i = 0, _a = this.files; _i < _a.length; _i++) {
            var file = _a[_i];
            totalSize += file.getSize();
            console.log(totalSize);
        }
        for (var _b = 0, _c = this.folders; _b < _c.length; _b++) {
            var folder = _c[_b];
            totalSize += folder.getSize();
            console.log(totalSize);
        }
        return totalSize;
    };
    return Folder;
}());
// Usage
var rootFolder = new Folder();
var subfolder1 = new Folder();
subfolder1.addFile(new MyFile(100));
subfolder1.addFile(new MyFile(200));
var subfolder2 = new Folder();
subfolder2.addFile(new MyFile(150));
rootFolder.addFolder(subfolder1);
rootFolder.addFolder(subfolder2);
rootFolder.addFile(new MyFile(50));
var totalSize = rootFolder.getSize();
console.log("Total size of the main folder: ".concat(totalSize, " bytes"));
