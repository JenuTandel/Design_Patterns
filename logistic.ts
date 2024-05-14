abstract class Logistic {
  abstract planDelivery(): void;
}
class Road extends Logistic {
  planDelivery(): void {
    console.log("planig delevery by road");
  }
  createVehical() {
    return new Truck();
  }
}

class Truck {
  deleverd() {
    console.log("delvered by truck");
  }
}

const road = new Road();
road.planDelivery();
const truck = road.createVehical();
truck.deleverd();
