//Calculate root folder size
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
        this.children = [];
    }
    Folder.prototype.add = function (child) {
        this.children.push(child);
    };
    Folder.prototype.getSize = function () {
        var totalSize = 0;
        for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
            var child = _a[_i];
            console.log(child);
            totalSize += child.getSize();
            console.log("total", totalSize);
        }
        return totalSize;
    };
    return Folder;
}());
var rootFolder = new Folder();
rootFolder.add(new MyFile(50)); // Add a file to the root folder
var subfolder1 = new Folder();
subfolder1.add(new MyFile(200)); // Add another MyFile to subfolder1
subfolder1.add(new MyFile(100)); // Add a file to subfolder1
var subfolder2 = new Folder();
subfolder2.add(new MyFile(150)); // Add a file to subfolder2
rootFolder.add(subfolder2);
rootFolder.add(subfolder1);
var totalSize = rootFolder.getSize();
console.log("Total size of the main folder: ".concat(totalSize, " bytes"));
