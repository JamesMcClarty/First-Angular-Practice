//Classes and Access Modifiers
export class Point {
    constructor(private _x?: number, private _y?: number) {
    }
    
    draw (){
      console.log('X: ' + this._x + ', Y: ' + this._y);
    }
  
    //Properties
  
    get x(){
      return this._x
    }
  
    set x(value: number){
      if(value < 0){
        throw new Error('Value cannot be below zero')
      }
  
      this._x = value;
    }
  }