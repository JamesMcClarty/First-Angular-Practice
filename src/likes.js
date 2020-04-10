"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Likes = /** @class */ (function () {
    function Likes(_numberOfLikes, _selected) {
        this._numberOfLikes = _numberOfLikes;
        this._selected = _selected;
    }
    Object.defineProperty(Likes.prototype, "numberOfLikes", {
        get: function () {
            return this._numberOfLikes;
        },
        enumerable: true,
        configurable: true
    });
    Likes.prototype.likeClick = function () {
        if (this._selected) {
            this._numberOfLikes--;
            this._selected = !this._selected;
        }
        else {
            this._numberOfLikes++;
            this._selected = !this._selected;
        }
    };
    return Likes;
}());
exports.Likes = Likes;
