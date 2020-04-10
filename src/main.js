"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var likes_1 = require("./likes");
/*
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
*/
//Typescript practice
function log(message) {
    console.log(message);
}
var message = 'Hello World';
log(message);
// Function
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally' + i);
}
doSomething();
//variables and types
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
    Color[Color["Purple"] = 3] = "Purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
//Type assertions
message = 'abc';
var endsWithC = message.endsWith('c');
var alternative = message.endsWith('c');
//Arrow functions
var doLog = function (message) { return console.log(message); };
doLog;
//Interfaces
/*
interface Point {
  x: number,
  y: number
}

let drawPoint = (point: Point) => {
  //..
}

drawPoint({
  x:1,
  y:2
})
*/
//Classes and Access Modifiers
// Objects
var point = new point_1.Point(1, 2);
var point2 = new point_1.Point();
point2.x = 10;
point.draw();
// Likes Exercise
var likes = new likes_1.Likes(5, false);
console.log(likes.numberOfLikes);
likes.likeClick();
console.log(likes.numberOfLikes);
