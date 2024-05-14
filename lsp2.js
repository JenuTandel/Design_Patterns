class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  calculateArea() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }

  setWidth(width) {
    this.width = width;
    // this.height = width;
  }

  setHeight(height) {
    // this.width = height;
    this.height = height;
  }
}

function printArea(rectangle) {
  console.log(rectangle);
  rectangle.setWidth(4);
  rectangle.setHeight(5);
  console.log(`Area: ${rectangle.calculateArea()}`);
}

const square = new Square(6);
printArea(square); // Incorrect output because Square's width and height are not independent.
