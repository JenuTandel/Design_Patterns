class SwitchableDevice {
  turnOn() {
    throw new Error("Not implemented");
  }
  turnOff() {
    throw new Error("Not implemented");
  }
}

class LightBulb extends SwitchableDevice {
  constructor(isOn) {
    super();
    this.isOn = isOn;
  }
  turnOn() {
    console.log("Light bulb turned on");
  }
  turnOff() {
    console.log("Light bulb turned off");
  }
}
class TubeLight extends SwitchableDevice {
  isOn = true;
  turnOn() {
    console.log("TubeLight turned on");
  }

  turnOff() {
    console.log("TubeLight turned off");
  }
}

class Switch {
  constructor(device) {
    this.device = device;
  }

  toggle() {
    if (this.device.isOn) {
      this.device.turnOff();
    } else {
      this.device.turnOn();
    }
  }
}

const bulb = new LightBulb(false);
const tubelight = new TubeLight();
const s = new Switch(bulb);
const s1 = new Switch(tubelight);
s.toggle();
s1.toggle();
