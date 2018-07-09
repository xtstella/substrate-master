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

export class Snap extends Substrate {

	constructor (source: any) {
		super(source);	
		console.log(this.source);
		this.source.x = this.source.x + 20;
		this.source.y = this.source.y + 20;
	}
}

export class Highlight extends Substrate {

	constructor (source: any, color: any){
		super(source);
		console.log(this.source);

		if (this.source.color) {
			context.fillStyle = this.source.color;
			context.strokeStyle = this.source.color;
		} else {
			context.fillStyle = color;
			context.strokeStyle = color; 
		}
		console.log(this.source.x + " " + this.source.y);
		context.strokeRect(this.source.x, this.source.y, 2, 2);
		context.fillRect(this.source.x, this.source.y, 2, 2)
	}

}

export class MarkerPlacer extends Substrate {

	constructor (source: any) {
		super(source);	
		var marker = new Image();
		marker.src = "marker.png";
		
		var xPos = this.source.x;
		var yPos = this.source.y;
		marker.onload = function (){
			context.drawImage(marker, xPos - marker.width/40, yPos - marker.height/20, marker.width/20, marker.height/20);
		}
	}
}

export class CreateRectangle extends Substrate {

	constructor(source: any){
		super(source);
		
		context.beginPath();
		context.strokeStyle = "rgb(200,100,100)";
		var rectangle = new paper.Rectangle(this.source.x - 5, this.source.y - 5, 20, 20);
		var path = new paper.Path.Rectangle(rectangle);
		path.strokeColor = 'black';
	}
}

export class Connection extends Substrate {

	constructor(source: any){
		super(source);
		console.log(this.source);
		context.strokeStyle = "rgb(200,100,100)";
		context.beginPath();
		context.moveTo(this.source[0].x, this.source[0].y);
		context.lineTo(this.source[1].x, this.source[1].y);
		context.stroke();
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

export class DisplaySubstrate extends Substrate {
	
	constructor(source:any){
		super(source);	
		console.log(this.source);
		var image = new Image();
		image.src = this.source.url;
		image.onload = function (){
			context.drawImage(image, 0, 0);
		}
	}
}


export class MoveSubstrate extends Substrate {
	
	constructor(source: any){
		super(source);
		console.log(this.source);
	}
}