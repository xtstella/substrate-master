import {ImageSubstrate, DrawPixel,TextSubstrate, Snap, CreateRectangle, Connection, MarkerPlacer, Substrate} from "./substrate";

export class InfoExtractor extends Substrate {
	
	constructor(source: any){
		super(source);
		console.log(source);
		var size = new paper.Size(30, 40);
		var graphic = new CreateRectangle(this.source, size);
	}
}