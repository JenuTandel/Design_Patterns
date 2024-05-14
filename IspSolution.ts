//interface for print functions
class PrintInterface {
  print() {
    console.log("print");
  }
  getPrintSpoolDetails() {
    console.log("getPrintSpoolDetails");
  }
}

//interface for scan functions
class ScanInterface {
  scan() {
    console.log("scan");
  }
  scanPhoto() {
    console.log("scan Photo");
  }
}

//interface for fax functions
class FaxInterface {
  fax() {
    console.log("fax");
  }
  internetFax() {
    console.log("internet fax");
  }
}

//Xerox center
class XeroxCenter implements PrintInterface, ScanInterface, FaxInterface {
  fax(): void {
    throw new Error("Method not implemented.");
  }
  internetFax(): void {
    throw new Error("Method not implemented.");
  }
  scan(): void {
    throw new Error("Method not implemented.");
  }
  scanPhoto(): void {
    throw new Error("Method not implemented.");
  }
  print(): void {
    throw new Error("Method not implemented.");
  }
  getPrintSpoolDetails(): void {
    throw new Error("Method not implemented.");
  }
}

//HP printer and scanner (functions: print, scan)
class HPPrinternScanner implements PrintInterface, ScanInterface {
  scan(): void {
    throw new Error("Method not implemented.");
  }
  scanPhoto(): void {
    throw new Error("Method not implemented.");
  }
  print(): void {
    throw new Error("Method not implemented.");
  }
  getPrintSpoolDetails(): void {
    throw new Error("Method not implemented.");
  }
}

//Canon Printer (function: print)
class CanonPrinters implements PrintInterface {
  print(): void {
    throw new Error("Method not implemented.");
  }
  getPrintSpoolDetails(): void {
    throw new Error("Method not implemented.");
  }
}
