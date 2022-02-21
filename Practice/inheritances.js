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
var Superclass = /** @class */ (function () {
    function Superclass() {
        console.log("Super Class Constructor");
    }
    return Superclass;
}());
var Derieved = /** @class */ (function (_super) {
    __extends(Derieved, _super);
    function Derieved() {
        var _this = _super.call(this) || this;
        console.log("Derieved class constructor");
        return _this;
    }
    return Derieved;
}(Superclass));
var Derieved1 = /** @class */ (function (_super) {
    __extends(Derieved1, _super);
    function Derieved1() {
        var _this = _super.call(this) || this;
        console.log("Derieved classes Multilevel");
        return _this;
    }
    return Derieved1;
}(Derieved));
var obj = new Derieved1();
