class Shape {
  calculateArea() {}
}
class Rectangle extends Shape {
  constructor(width, height) {
    super();
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

class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }

  setSide(side) {
    this.side = side;
  }
  calculateArea() {
    return this.side * this.side;
  }
}

function printArea(shape) {
  const ans = shape.calculateArea();
  console.log(`Area: `, ans);
}

const rectangle = new Rectangle(4, 5);
const square = new Square(6);

printArea(rectangle);
printArea(square);
