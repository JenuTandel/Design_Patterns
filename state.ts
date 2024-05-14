// State interface
interface TrafficLightState {
  changeState(): void;
}

// Concrete state classes
class RedState implements TrafficLightState {
  changeState(): void {
    console.log("Traffic light changed to GREEN");
    // Transition to the next state (Green)
    trafficLight.setState(new GreenState());
  }
}

class GreenState implements TrafficLightState {
  changeState(): void {
    console.log("Traffic light changed to YELLOW");
    // Transition to the next state (Yellow)
    trafficLight.setState(new YellowState());
  }
}

class YellowState implements TrafficLightState {
  changeState(): void {
    console.log("Traffic light changed to RED");
    // Transition to the next state (Red)
    trafficLight.setState(new RedState());
  }
}

// Context class
class TrafficLight {
    private currentState: TrafficLightState;
  
    constructor() {
      // Initialize with the Red state
      this.currentState = new RedState();
    }
  
    setState(state: TrafficLightState): void {
      this.currentState = state;
    }
  
    requestChange(): void {
      this.currentState.changeState();
    }
  }

  const trafficLight = new TrafficLight();

// Simulate traffic light state changes
trafficLight.requestChange(); // Changes from Red to Green
trafficLight.requestChange(); // Changes from Green to Yellow
trafficLight.requestChange(); // Changes from Yellow to Red
