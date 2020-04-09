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

function log(message){
  console.log(message);
}

var message = 'Hello World';

log(message);

function doSomething(){
  for (var i = 0; i<5; i++){
    console.log(i)
  }

  console.log('Finally' + i);
}

doSomething();

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] =[1,2,3];
let f: any[] = [1, true, 'a', false]

const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;

enum Color {Red = 0, Green = 1, Blue = 2, Purple = 3};
let backgroundColor = Color.Red;
