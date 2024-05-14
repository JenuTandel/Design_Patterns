class Shape {
  constructor() {
    console.log("Shape");
  }

  area() {
    console.log("Error");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return 3.14 * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

const c = new Circle();
const a = c.area();
console.log(a);
