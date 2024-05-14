//Calculate root folder size

interface FileSystemElement {
  getSize(): number;
}

class MyFile implements FileSystemElement {
  constructor(private size: number) {}

  getSize() {
    return this.size;
  }
}

class Folder implements FileSystemElement {
  private children: FileSystemElement[] = [];

  add(child: FileSystemElement) {
    this.children.push(child);
  }

  getSize() {
    let totalSize = 0;
    for (const child of this.children) {
      console.log(child);

      totalSize += child.getSize();
      console.log("total", totalSize);
    }
    return totalSize;
  }
}

const rootFolder = new Folder();
rootFolder.add(new MyFile(50)); // Add a file to the root folder

const subfolder1 = new Folder();
subfolder1.add(new MyFile(200)); // Add another MyFile to subfolder1
subfolder1.add(new MyFile(100)); // Add a file to subfolder1

const subfolder2 = new Folder();
subfolder2.add(new MyFile(150)); // Add a file to subfolder2

rootFolder.add(subfolder2);
rootFolder.add(subfolder1);

const totalSize = rootFolder.getSize();
console.log(`Total size of the main folder: ${totalSize} bytes`);
