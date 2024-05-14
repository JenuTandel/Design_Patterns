class Bird {
  fly() {
    console.log("Bird is flying");
  }
}

class Sparrow extends Bird {
  fly() {
    console.log("Sparrow is flying");
  }
}

class Ostrich extends Bird {
  // Ostrich cannot fly
}

function makeBirdFly(bird) {
  console.log(bird);
  bird.fly();
}

const sparrow = new Sparrow();
const ostrich = new Ostrich();

makeBirdFly(sparrow); // Output: Sparrow is flying
makeBirdFly(ostrich); // Output: Bird is flying (not accurate for an ostrich)
