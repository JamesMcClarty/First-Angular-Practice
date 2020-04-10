"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Classes and Access Modifiers
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        //Properties
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error('Value cannot be below zero');
            }
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
