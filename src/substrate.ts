import * as datasource from "./dataSource";

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

var canvas = <HTMLCanvasElement> document.getElementById('canvas');
var context = canvas.getContext('2d');

class Substrate {

	source: any;
	constructor(a: any){
		//console.log(a);
		if (Array.isArray(a)){	
			console.log(a);
			this.source = [];
			for ( let i=0; i< a.length; i++){
				if(a[i].source) {
					console.log(a[i]);
					this.source[i] = a[i].source;
				} else {
					this.source[i] = a[i];
				}
			}
			
		} else {		
			if (a.source) {
				this.source = a.source;
			} else {
				this.source = a;
			}	
		}
		
	}
}

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

export class TextSubstrate extends Substrate {
	
	constructor (source: any, text: any) {
		super(source);	
		var txt = new paper.PointText(this.source);
		txt.content = text;
		txt.fillColor = "black";
		txt.bringToFront(); 
	}
}

export class Snap extends Substrate {

	constructor (source: any) {
		super(source);	
		console.log(this.source);
		this.source.x = this.source.x + 20;
		this.source.y = this.source.y + 20;
	}
}

export class DrawPixel extends Substrate {

	constructor (source: any, color: any){
		super(source);
		console.log(this.source);


		var p = new paper.Point(this.source.x, this.source.y);
		var rect = new paper.Rectangle(p, new paper.Size(2,2));
		var path = new paper.Path.Rectangle(rect);

		if (this.source.color) {
			path.strokeColor = this.source.color;
			path.fillColor = this.source.color;
		} else {
			path.strokeColor = color;
			path.fillColor = color; 
		}
	}

}

export class MarkerPlacer extends Substrate {

	constructor (source: any) {
		super(source);	
		let img = new Image();
		img.src = "marker.png";

		let xPos = this.source.x;
		let yPos = this.source.y;
		let point = new paper.Point( xPos, yPos);
		let image = new paper.Raster({source: datasource.markerImage.url, position: point});
		image.height = img.height/20;
		image.width = img.width/20;
	}

}

export class CreateRectangle extends Substrate {

	constructor(source: any, size: any){
		super(source);
		console.log(this.source);
		var rectangle = new paper.Rectangle(this.source.x - 5, this.source.y - 5, size.width, size.height);
		var path = new paper.Path.Rectangle(rectangle);
		path.strokeColor = 'black';
		//var rectangle = new paper.Rectangle(650, 80, 15, 15);
		//var path = new paper.Path.Rectangle(rectangle);
		//path.strokeColor = 'black';
		
	}
}

export class Connection extends Substrate {

	constructor(source: any){
		super(source);
		console.log(this.source);
		var p1 = new paper.Point(this.source[0].x, this.source[0].y);
		var p2 = new paper.Point(this.source[1].x, this.source[1].y);
		var path = new paper.Path.Line(p1, p2);
		path.strokeColor = 'red';
	}	

}

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

export class ImageSubstrate extends Substrate {
	
	constructor(source:any, img: any){
		super(source);	
		console.log(img.url);	
		var image = new paper.Raster({source: img.url, position: this.source});
	}
}


export class MoveSubstrate extends Substrate {
	
	constructor(source: any){
		super(source);
		console.log(this.source);
		let mousemove = fromEvent(canvas, 'mousemove');
		mousemove.subscribe((e: any) => {
			this.source.x = e.x;
			this.source.y = e.y;
		});
	}
}