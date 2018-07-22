var canvas = <HTMLCanvasElement> document.getElementById('canvas');
var context = canvas.getContext('2d');

export class Pixel {
	x: number;
	y: number;
	color: string;

	constructor(x:number, y:number, r:number, g: number, b: number){
		this.x = x;
		this.y = y;
		this.color = "rgb("+ r + "," + g +"," + b + ")";
	}
}

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
    public mouseDown = (event: MouseEvent) => {
		this.x = event.x - canvas.offsetLeft;
		this.y = event.y - canvas.offsetTop;
		console.log(this.x + " " + this.y);
    }
   public mouseUp = (event: MouseEvent) => {
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

export let positionInfoExtractor = new paper.Point(600,300);


class Grid {
	static origin = {x: 0, y: 0};
	w: any;
	h: any;
	linewidth: any;
	color: string;

	constructor (width:any, height:any, linewidth:any, color: string) {
		this.w = width;
		this.h = height;
		this.linewidth = linewidth;
		this.color = color;

		for (let x=0; x<this.w; x+=20){
			for (let y=0; y<this.h; y+=20){
				context.beginPath();
				context.strokeStyle = this.color;
				context.moveTo(x, 0);
				context.lineTo(x, this.h);
				//context.stroke();
				context.moveTo(0, y);
				context.lineTo(this.w, y);
				context.stroke();

			}
		}

	}
}