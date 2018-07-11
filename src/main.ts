import * as substrate from "./substrate";
import * as DS from "./dataSource";

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import {mergeMap, takeUntil } from 'rxjs/operators';

var canvas = <HTMLCanvasElement> document.getElementById('canvas');
var context = canvas.getContext('2d');

window.onload = function() {
	
	paper.setup(canvas);

	let bgImage = new substrate.ImageSubstrate(DS.pBgImage, DS.franceImage);
	
	let parisPixel = new substrate.DrawPixel(DS.parisPoint, DS.cPixel);
	let parisText = new substrate.TextSubstrate(parisPixel, DS.tParis);
	
	let p1 = new substrate.DrawPixel(DS.c1, DS.cPixel);
	let p2 = new substrate.DrawPixel(DS.c2, DS.cPixel);
	let snap2 = new substrate.Snap(p2);
	
	let title = new substrate.TextSubstrate(DS.pTitle, DS.tTitle);
	
	let pixelRect = new substrate.DrawPixel(DS.pRect, DS.cPixel);
	let rect = new substrate.CreateRectangle(pixelRect, new paper.Size(15,15));
	let connect = new substrate.Connection([title, rect]);
	
	//let connect1 = new substrate.Connection([p1, rect]);

/*	title.onMouseDrag = function(event: paper.MouseEvent){
		title.position = new paper.Point(event.point.x, event.point.y);
	}*/
	/************ normal way  *************/
/*	rect.path.onMouseDrag = function(event: paper.MouseEvent){
		rect.path.position = new paper.Point(event.point.x, event.point.y);
	}*/

	let mouseup = fromEvent(canvas, 'mouseup');
	let mousemove = fromEvent(canvas, 'mousemove');
	let mousedown = fromEvent(canvas, 'mousedown');

	let mousedrag = mousedown.pipe(
  		mergeMap(down => mousemove.pipe(takeUntil(mouseup)))
	);
	
	let observerDown = function (source: any){
		pixelRect.path.remove();
		rect.path.remove();
		connect.path.remove();
		//connect1.path.remove();
/*		let pixel = new substrate.Pixel (source.x - canvas.offsetLeft, source.y - canvas.offsetTop, 255, 100, 100);
		let highlightPixel = new substrate.DrawPixel(pixel, DS.cPixel);
		let markerPlacer = new substrate.MarkerPlacer(highlightPixel);*/
	}
	
	let observerUP = function (source: any){
		let p = new paper.Point(source.x - canvas.offsetLeft, source.y - canvas.offsetTop);
		pixelRect = new substrate.DrawPixel(p, DS.cPixel);
		rect = new substrate.CreateRectangle(pixelRect, new paper.Size(15,15));
		connect = new substrate.Connection([title, rect]);
		//connect1 = new substrate.Connection([p1, rect]);
	}	
	let observerMove = function (source: any){
		console.log(source);
		//let move = new substrate.MoveSubstrate (source, rect);
		
		let rect1 = new substrate.CreateRectangle(new paper.Point(source.x - canvas.offsetLeft, source.y - canvas.offsetTop), new paper.Size(15,15));
		
		let connect = new substrate.Connection([title, rect]);
		
		/*let rect = new substrate.CreateRectangle(new paper.Point(source.x - canvas.offsetLeft, source.y - canvas.offsetTop), new paper.Size(15,15));*/
	}
	
	mousedown.subscribe(observerDown);
	//mousedrag.subscribe(observerMove);
	mouseup.subscribe(observerUP)




	/*un comment this */	
/*	let mousedown = fromEvent(canvas, 'mousedown');
	mousedown.subscribe((source: any) => {
		console.log(source);
		let pixel = new substrate.Pixel (source.x - canvas.offsetLeft, source.y - canvas.offsetTop, 255, 100, 100);
		//let snap = new Snap(pixel);
		let highlightPixel = new substrate.DrawPixel(pixel, "rgb(200,100,100)");
		let markerPlacer = new substrate.MarkerPlacer(highlightPixel);
	});	*/
	/*un comment this */
	
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
