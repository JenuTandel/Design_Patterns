class Product {
  discount = 20;
  getDiscount() {
    return this.discount;
  }
}

class InHouseProduct extends Product {
  constructor() {
    super();
  }
  getDiscount() {
    this.applyExtraDiscount();
    return this.discount;
  }
  applyExtraDiscount() {
    this.discount = this.discount * 1.5;
  }
}

p1 = new Product();
p2 = new Product();
hp = new InHouseProduct();

var products = [];
products.push(p1, p2, hp);

products.forEach((pro) => {
  // if (pro instanceof InHouseProduct) {
  //   pro.applyExtraDiscount();
  // } else {
  const d = pro.getDiscount();
  console.log(d);
  // }
});
