class PizzaFactory {
  createPizza(type: string) {
    switch (type) {
      case "Margerita":
        return new Margherita();
      case "Veggie":
        return new Veggie();
      case "7 cheese":
        return new Cheese7();
      default:
        throw new Error("Invalid pizza type");
    }
  }
}

abstract class Pizza {
  abstract process(): void;
  abstract price: number;
  baking() {
    console.log("pizza start baking");
  }
}

class Margherita extends Pizza {
  price: 100;
  process(): void {
    console.log("Margherita");
  }
}

class Veggie extends Pizza {
  price: 100;
  process(): void {
    console.log("Veggie");
  }
}

class Cheese7 extends Pizza {
  price: 100;
  process(): void {
    console.log("7 Cheese");
  }
}

const pizzaFactory = new PizzaFactory();
const m = pizzaFactory.createPizza("Margerita");
m?.process();
m.baking();
