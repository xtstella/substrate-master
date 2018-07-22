import * as datasource from "./dataSource";

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

var canvas = <HTMLCanvasElement> document.getElementById('canvas');
var context = canvas.getContext('2d');

export class Substrate {

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
		this.source.x = this.source.x + 20;
		this.source.y = this.source.y + 20;
	}
}

export class DrawPixel extends Substrate {
	
	path: any;
	constructor (source: any, color: any){
		super(source);

		var p = new paper.Point(this.source.x, this.source.y);
		var rect = new paper.Rectangle(p, new paper.Size(2,2));
		this.path = new paper.Path.Rectangle(rect);

		if (this.source.color) {
			this.path.strokeColor = this.source.color;
			this.path.fillColor = this.source.color;
		} else {
			this.path.strokeColor = color;
			this.path.fillColor = color; 
		}
	}

}

paper.Raster.prototype.rescale = function(width: any, height: any) {
    this.scale(width / this.width, height / this.height);
};

export class MarkerPlacer extends Substrate {

	constructor (source: any) {
		super(source);	

		let xPos = this.source.x;
		let yPos = this.source.y;
		var imagePosition = new paper.Point(xPos, yPos);	

		var raster = new paper.Raster({source: datasource.markerImage.url, position: imagePosition});

		raster.on('load', function() {  
			var img = new Image();
			img.src = "marker.png";		
			var imageSize = new paper.Size(img.width/20, img.height/20);
			raster.rescale(img.width/20, img.height/20);
		});

	}
}

export class CreateRectangle extends Substrate {

	path: any;
	rectangle: any;
	constructor(source: any, size: any){
		super(source);
		this.rectangle = new paper.Rectangle(this.source.x - 5, this.source.y - 5, size.width, size.height);
		this.path = new paper.Path.Rectangle(this.rectangle);
		this.path.strokeColor = 'black';

		//var rectangle = new paper.Rectangle(650, 80, 15, 15);
		//var path = new paper.Path.Rectangle(rectangle);
		//path.strokeColor = 'black';

	}
}

export class Connection extends Substrate {
	path: any;
	constructor(source: any){
		super(source);
		var p1 = new paper.Point(this.source[0].x, this.source[0].y);
		var p2 = new paper.Point(this.source[1].x, this.source[1].y);
		this.path = new paper.Path.Line(p1, p2);
		this.path.strokeColor = 'red';
	}	

}

export class ImageSubstrate extends Substrate {

	constructor(source:any, img: any){
		super(source);	
		var image = new paper.Raster({source: img.url, position: this.source});
	}
}

export class MoveSubstrate extends Substrate {

	constructor(source: any, object: any){
		super(source);
		/*		let mousemove = fromEvent(canvas, 'mousemove');
		mousemove.subscribe((e: any) => {*/
		object.path.position.x = this.source.x;
		object.path.position.y = this.source.y;
		//		let path = new paper.Path.Rectangle(this.rectangle);
		/*		});*/
	}
}