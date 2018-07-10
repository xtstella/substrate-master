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
export let c0 = new CityInfo(0, "Paris", 321, 200);
export let c1 = new CityInfo(1, "Lyon", 407, 300);
export let c2 = new CityInfo(2, "haha", 350, 400);


export class ImageSource {
	url: any;
	constructor(url: any){
		this.url = url;
	}
}
export let franceImage = new ImageSource("../src/france.svg");
export let markerImage = new ImageSource("marker.png");


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

export let pTitle = new paper.Point(10,10);
export let pRect = new paper.Point(650, 80);
export let parisPoint = new paper.Point(310,160);
export let pBgImage = new paper.Point(150,90);


export let tTitle = "France";
export let tParis = "Paris";

export let cPixel = "rgb(200,100,100)";
/*
class Roads {


}*/