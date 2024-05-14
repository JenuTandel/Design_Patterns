class ReactiveDataModel {
  constructor() {
    this.data = {}; // Store the data properties
    this.listeners = new Map(); // Store the dependencies
  }

  // Define a method to define reactive properties
  defineProperty(key, initialValue) {
    let value = initialValue;

    Object.defineProperty(this.data, key, {
      get: () => {
        // Track the dependency if there's a listener
        if (ReactiveDataModel.currentListener) {
          this.addDependency(key, ReactiveDataModel.currentListener);
        }
        return value;
      },
      set: (newValue) => {
        if (value !== newValue) {
          value = newValue;
          // Notify all dependent functions when the value changes
          this.notify(key);
        }
      },
      enumerable: true,
    });
  }

  // Add a dependency between a property and a function
  addDependency(key, listener) {
    if (!this.listeners.has(key)) {
      this.listeners.set(key, new Set());
      console.log(this.listeners);
    }
    this.listeners.get(key).add(listener);
  }

  // Notify all dependent functions when a property changes
  notify(key) {
    if (this.listeners.has(key)) {
      this.listeners.get(key).forEach((listener) => listener());
    }
  }
}

// A utility function to track the current function being executed
ReactiveDataModel.track = (fn) => {
  ReactiveDataModel.currentListener = fn;
  console.log(ReactiveDataModel.currentListener);
  fn();
  ReactiveDataModel.currentListener = null;
};

// Example usage
const model = new ReactiveDataModel();

model.defineProperty("count", 0);

function doubleCount() {
  console.log("Double Count:", model.data.count * 2);
}

ReactiveDataModel.track(doubleCount); // Initial execution
model.data.count = 5; // Double Count: 10 (automatically updates)
