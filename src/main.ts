import * as substrate from "./substrate";
import * as datasource from "./dataSource";

import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, debounceTime, tap, switchAll, distinctUntilChanged } from 'rxjs/operators';


var canvas = <HTMLCanvasElement> document.getElementById('canvas');
var context = canvas.getContext('2d');

window.onload = function() {
	paper.setup(canvas);
	var p = new paper.Point(250,200);
	console.log(p);

	var img = new paper.Raster({source: 'france.svg', position: new paper.Point(150,90)});
	var txt = new paper.PointText(p);
	txt.content = "Paris";
	txt.fillColor = "black";
	txt.bringToFront(); 

	//let rect = new substrate.CreateRectangle( new paper.Point(600, 600));
	var rectangle = new paper.Rectangle(20, 20, 60, 60);
	var path = new paper.Path.Rectangle(rectangle);
	path.strokeColor = 'black';
}

let buildings = new substrate.Highlight(datasource.c1,"rgb(200,100,100)" );
//let display = new substrate.DisplaySubstrate(datasource.franceImage);

let mousedown = fromEvent(canvas, 'mousedown');
let source = mousedown;
let subscription = source.subscribe((source: any) => {
	console.log(source);
	let pixel = new substrate.Pixel (source.x - canvas.offsetLeft, source.y - canvas.offsetTop, 255, 100, 100);
	//let snap = new Snap(pixel);
	let highlightPixel = new substrate.Highlight(pixel, "rgb(200,100,100)");
	let markerPlacer = new substrate.MarkerPlacer(highlightPixel);
});	



// We start by defining an empty variable that is visible by both
// mouse handlers.
var myPath: any;

function onMouseDown(event: any) {
	// The mouse was clicked, so let's put a newly created Path into
	// myPath, give it the color black and add the location as the
	// path's first segment.
	myPath = new paper.Path();
	myPath.strokeColor = 'black';
	myPath.add(event.point);
}

function onMouseUp(event: any) {
	// The mouse was released, so we add the new location as the end
	// segment of the line.
	myPath.add(event.point);
}





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
