var canvas = <HTMLCanvasElement> document.getElementById('canvas');
var context = canvas.getContext('2d');

export class CityInfo {
	id: number;
	name: string;
	x: number;
	y: number;
	
	constructor(id: number, name: string, x: number, y: number){
		this.name = name;
		this.x = x;
		this.y = y;
	}
}
let cityArray: { id: number, name: string, x: number, y: number }[] = [
    { "id": 0, "name": "Paris", "x": 321, "y":200 },
    { "id": 1, "name": "hahaha", "x": 521, "y":400  }
];
export let c1 = new CityInfo(0, "Paris", 520, 280);


export class ImageSource {
	url: any;
	constructor(url: any){
		this.url = url;
	}
}
export let franceImage = new ImageSource("../src/france.svg");



export class Mouse  {
	x: number;
	y: number;

	constructor(){
		canvas.addEventListener("mousedown", this.mouseDown);
		canvas.addEventListener("mouseMove", this.mouseMove);
	}

	public mouseMove = (event: MouseEvent) => {
		this.x = event.x - canvas.offsetLeft;
		this.y = event.y - canvas.offsetTop;
	}
    mouseDown = (event: MouseEvent) => {
		this.x = event.x - canvas.offsetLeft;
		this.y = event.y - canvas.offsetTop;
		console.log(this.x + " " + this.y);
    }
    mouseUp = (event: MouseEvent) => {
        //window.removeEventListener("mousemove", this.mouseMove);
    }

}
export let mouse = new Mouse();




/*
class Roads {


}*/