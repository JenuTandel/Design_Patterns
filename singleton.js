class Singleton {
  constructor() {
    const instance = this.constructor.instance;
    console.log(instance);
    if (instance) {
      return instance;
    }
    this.constructor.instance = this;
  }
}

const s1 = new Singleton();
const s2 = new Singleton();

console.log("same instance", s1 == s2);
