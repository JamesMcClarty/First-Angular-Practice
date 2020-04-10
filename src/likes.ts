export class Likes{

    constructor(private _numberOfLikes?: number, private _selected?:boolean){}

    get numberOfLikes(){
        return this._numberOfLikes;
    }

    likeClick(){
        if(this._selected){
            this._numberOfLikes--;
            this._selected = !this._selected;
        }
        else{
            this._numberOfLikes++;
            this._selected = !this._selected;
        }
    }
}