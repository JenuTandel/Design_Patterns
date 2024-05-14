var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PizzaFactory = /** @class */ (function () {
    function PizzaFactory() {
    }
    PizzaFactory.prototype.createPizza = function (type) {
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
    };
    return PizzaFactory;
}());
var Pizza = /** @class */ (function () {
    function Pizza() {
    }
    Pizza.prototype.banking = function () {
        console.log("pizza start baking");
    };
    return Pizza;
}());
var Margherita = /** @class */ (function (_super) {
    __extends(Margherita, _super);
    function Margherita() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Margherita.prototype.process = function () {
        console.log("Margherita");
    };
    return Margherita;
}(Pizza));
var Veggie = /** @class */ (function (_super) {
    __extends(Veggie, _super);
    function Veggie() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Veggie.prototype.process = function () {
        console.log("Veggie");
    };
    return Veggie;
}(Pizza));
var Cheese7 = /** @class */ (function (_super) {
    __extends(Cheese7, _super);
    function Cheese7() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cheese7.prototype.process = function () {
        console.log("7 Cheese");
    };
    return Cheese7;
}(Pizza));
var pizzaFactory = new PizzaFactory();
var m = pizzaFactory.createPizza("Margerita");
m === null || m === void 0 ? void 0 : m.process();
m.banking();
