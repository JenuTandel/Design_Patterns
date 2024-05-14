class MyFile {
  constructor(private size: number) {}

  getSize() {
    return this.size;
  }
}

class Folder {
  private files: MyFile[] = [];
  private folders: Folder[] = [];

  addFile(file: MyFile) {
    this.files.push(file);
  }

  addFolder(folder: Folder) {
    this.folders.push(folder);
  }

  getSize() {
    let totalSize = 0;

    for (const file of this.files) {
      totalSize += file.getSize();
      console.log(totalSize);
    }

    for (const folder of this.folders) {
      totalSize += folder.getSize();
      console.log(totalSize);
    }

    return totalSize;
  }
}

// Usage
const rootFolder = new Folder();

const subfolder1 = new Folder();
subfolder1.addFile(new MyFile(100));
subfolder1.addFile(new MyFile(200));

const subfolder2 = new Folder();
subfolder2.addFile(new MyFile(150));

rootFolder.addFolder(subfolder1);
rootFolder.addFolder(subfolder2);
rootFolder.addFile(new MyFile(50));

const totalSize = rootFolder.getSize();
console.log(`Total size of the main folder: ${totalSize} bytes`);
