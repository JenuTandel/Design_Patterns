//interface for multi functions
class MultiFunctionInterface {
  print() {
    console.log("print");
  }
  getPrintSpoolDetails() {
    console.log("getPrintSpoolDetails");
  }
  scan() {
    console.log("scan");
  }
  scanPhoto() {
    console.log("scan Photo");
  }
  fax() {
    console.log("fax");
  }
  internetFax() {
    console.log("internet fax");
  }
}

//Xerox center (all the functions works)
class XeroxWorkCenter implements MultiFunctionInterface {
  print(): void {
    throw new Error("Method not implemented.");
  }
  getPrintSpoolDetails(): void {
    throw new Error("Method not implemented.");
  }
  scan(): void {
    throw new Error("Method not implemented.");
  }
  scanPhoto(): void {
    throw new Error("Method not implemented.");
  }
  fax(): void {
    throw new Error("Method not implemented.");
  }
  internetFax(): void {
    throw new Error("Method not implemented.");
  }
}

//HP printer and scanner (functions: print, scan)
class HPPrinterScanner implements MultiFunctionInterface {
  print(): void {
    throw new Error("Method not implemented.");
  }
  getPrintSpoolDetails(): void {
    throw new Error("Method not implemented.");
  }
  scan(): void {
    throw new Error("Method not implemented.");
  }
  scanPhoto(): void {
    throw new Error("Method not implemented.");
  }
  fax(): void {
    throw new Error("Method not implemented.");
  }
  internetFax(): void {
    throw new Error("Method not implemented.");
  }
}

//Canon Printer (function: print)
class CanonPrinter implements MultiFunctionInterface {
  print(): void {
    throw new Error("Method not implemented.");
  }
  getPrintSpoolDetails(): void {
    throw new Error("Method not implemented.");
  }
  scan(): void {
    throw new Error("Method not implemented.");
  }
  scanPhoto(): void {
    throw new Error("Method not implemented.");
  }
  fax(): void {
    throw new Error("Method not implemented.");
  }
  internetFax(): void {
    throw new Error("Method not implemented.");
  }
}
