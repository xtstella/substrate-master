import * as substrate from "./substrate";
import * as datasource from "./dataSource";

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';

var canvas = <HTMLCanvasElement> document.getElementById('canvas');
var context = canvas.getContext('2d');

window.onload = function() {
	
	paper.setup(canvas);
	let title = new substrate.TextSubstrate(new paper.Point(10,10), "France");

	let bgImage = new substrate.ImageSubstrate(new paper.Point(150,90), datasource.franceImage);

	let parisPoint = new paper.Point(310,160);
	let parisPixel = new substrate.DrawPixel(parisPoint, "rgb(200,100,100)");
	let parisText = new substrate.TextSubstrate(parisPoint, "Paris");
	
//	txt.onMouseDrag = function(event: paper.MouseEvent){
	//	txt.position = new paper.Point(event.point.x, event.point.y);
//	}
	
	let p1 = new substrate.DrawPixel(datasource.c1,"rgb(200,100,100)" );
	let p2 = new substrate.DrawPixel(datasource.c2,"rgb(200,100,100)" );

	let rect = new substrate.CreateRectangle(new paper.Point(650, 80), new paper.Size(15,15));

	//let connect = new substrate.Connection([parisText, rect]);

	let mousedown = fromEvent(canvas, 'mousedown');
	mousedown.subscribe((source: any) => {
		console.log(source);
		let pixel = new substrate.Pixel (source.x - canvas.offsetLeft, source.y - canvas.offsetTop, 255, 100, 100);
		//let snap = new Snap(pixel);
		let highlightPixel = new substrate.DrawPixel(pixel, "rgb(200,100,100)");
		let markerPlacer = new substrate.MarkerPlacer(highlightPixel);
	});	
	
	/*moveInstrument.onMouseDrag = function(event) {
		let rect = new substrate.CreateRectangle(new paper.Point(650, 80), new paper.Size(15,15));

		var Move = new substrate.MoveSubstrate(rect);		
	}*/
	
}


/*	mousedown.subscribe((source: any) => {
		console.log(source);
		let pixel = new substrate.Pixel (source.x - canvas.offsetLeft, source.y - canvas.offsetTop, 255, 100, 100);
		//let snap = new Snap(pixel);
		let highlightPixel = new substrate.Highlight(pixel, "rgb(200,100,100)");
		let markerPlacer = new substrate.MarkerPlacer(highlightPixel);
		//var Move = new substrate.MoveSubstrate(rect);

	});	*/
	
	//let mousedown = fromEvent(canvas, 'mousedown');
	//mousedown.subscribe((source: any) => {
//	});




//let grid = new Grid(300, 300, 20, "rgb(211,211,211)");
/*

let pixel = new Pixel (10, 10, 255, 100, 100);
let snap = new Snap(pixel);
let highlightPixel = new Highlight(snap);
let markerPlacer = new MarkerPlacer(highlightPixel);

let pixel2 = new Pixel (80, 80, 255, 100, 100);
let snap2 = new Snap(pixel2);
let markerPlacer2 = new MarkerPlacer(snap2);

let pixel3 = new Pixel (250, 150, 255, 100, 100);
let createRectangle3 = new CreateRectangle(pixel3);

//let connection = new Connection(pixel);

let connection = new Connection([markerPlacer, createRectangle3]);

*/

/*let endPixel = new Pixel (20, 20, new paper.Color(20,20,20));






let rect = new CreateRectangle();

function update() {
  console.log("Hello");
}

Object.observe(pixel, function(changes) {
  changes.forEach(function(change) {
    // Any time name or title change, update the greeting
    if (change.x === 'x' || change.y === 'y') {
      updateGreeting();
    }
  });
});*/
