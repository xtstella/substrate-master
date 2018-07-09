import * as d3 from 'd3';

let svgContainer = d3.select("body").append("svg").attr("width", 900).attr("height", 900);

class Substrate {
	source:any;
	constructor (source:any){
		this.source = source;
	}
	
	getSource(){
		return this.source;
	}
}

class ExternalDataSubstrate extends Substrate {

	day: number;
	month: number;
	year: number;
	dayOfWeek: string;
	
	constructor(source:any){
		super(source);
		this.day = source.getDay();
		this.month = source.getMonth();
		this.year = source.getFullYear();
	}
	
	/*	
	public values: any[];
	public keys: any[];
	
	constructor () {

		d3.csv("data.csv", function(data){
			console.log(data);
			console.log("this is the data", data);
 			data.forEach(function(item:any){
    			this.keys = d3.keys(item);
    			var array = []
				for(var key in item) {
					array.push(item[key]);
				}
    			this.values.push(array);
  			});
		});
		
		console.log(this.values);
	}*/
/*
	public date: currentDate.getDate();
	public day: currentDate.getDay();
	public year: currentDate.getFullYear();
	public month: currentDate.getMonth() + 1;
*/

    // names of months and week days.
 /*  public monthNames = ["January","February","March","April","May","June","July","August","September","October","November", "December"];
   public dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Fr iday", "Saturday"];
   public dayPerMonth = ["31", ""+FebNumberOfDays+"","31","30","31","30","31","31","30","31","30","31"]*/

}

class DatesSubstrate extends Substrate {
   
	dayPerMonth = [31, 28,31,30,31,30,31,31,30,31,30,31];
	Ndays: number;
	datesArray: Array<number> = [];
	
	constructor(source:any){
		super(source);
		this.Ndays = this.dayPerMonth[source.month+1];
		for (let i:number =1; i<=this.Ndays; i++ ){
			this.datesArray.push(i);
		}
		console.log(this.datesArray);
	}
}

class CellSubstrate extends Substrate {
	
	cell: any;
	constructor(source:any) {
		super(source);
		this.cell = svgContainer.append("g");
		//this.color = "rgb(40,50,60)";
		//this.color = "#ffbbaa";
	}
	
	getCell(){
		return this.cell;
	}
	
}

class ShapeSubstrate extends Substrate {
	
	public shape: any;
	
	constructor (source:any){
		super(source)
 		let cell = source.getCell();
		
	/*	cell.data(this.dates).append("g")
      .attr("transform", function(d, i) { return "translate(0," + i * 10 + ")"; });*/
		
		cell.append("rect").attr("x", 10).attr("y", 10).attr("width", 90).attr("height", 40).attr("fill","white").attr("stroke-width", 2).attr("stroke", "orange");
		
		cell.append("text")
		.attr("x", 20)
		.attr("y", 30)
		.attr("fill","#000")
		.style("stroke-width", 2)
		.style("z-index",999999999)
		.style("font-size","18px")
		.text("1");
	}

}

class TableSubstrate extends Substrate {
   
	shape: ShapeSubstrate;
	Ncolumn: number;
	Nrow: number;
	
	datesArray:any = [1,2,3,4,5,6,7,8,9,10];

	constructor (source:any, dates:any){
		super(source);
		console.log(source);
		//this.shape = shapeSubstrate;
	/*	this.Ncolumn = Nc;
		this.Nrow = Nr;*/
		
	/*	d3.select("svg").selectAll(null)
    		.data([4, 8, 15, 16, 23, 42])
    		.enter()
			.append("rect")                    .style("fill","white")    
            .style("stroke","black")
			.attr("width", 90)
            .attr("height", 50)
			.text(function(d) { return d; });*/
		
/*		for(let y=0; y< this.Nrow; y++){
			
			for(let x=0; x< this.Ncolumn; x++)
        	{
				d3.select("svg").append("rect")
					.data([4, 8, 15, 16, 23, 42])
					.attr("x", 90*x )
					.attr("y", 50*y)
                    .attr("width", 90)
                    .attr("height", 50)
                    .style("fill","white")    
                    .style("stroke","black")
					.append("p")	
					.text(x);
        	}
		}*/
		
	}
}

/*class CalendarSubstrate() {
	
	public container: any;
	
	constructor () {
		this.container = d3.select("body").append("svg").attr("width", 900).attr("height", 900);
	}
}*/



class Activity {
	
	public id: number;
	public Date: number;
	public description: string;
	
}
/*
class TimeSubstrate extends Substrate {
   
   constructor( ){
      
   }
   
   get year(): number {  
      return this.years;
   } 
   
   get month():number {
      return this.months;
   }
   
}
*/

let currentDay = new Date();
let externalData = new ExternalDataSubstrate(currentDay);
let datesObj = new DatesSubstrate(externalData);	
console.log(datesObj);

let cellObj = new CellSubstrate(datesObj);
console.log(cellObj);
let shapeObj = new ShapeSubstrate(cellObj);

let tableObj = new TableSubstrate(shapeObj, datesObj);
//var calendarObj = new CalendarSubstrate(tableObj);

/*

document.getElementById("currentTime").insertAdjacentText('beforeend', datesObj.date.toString());
*/

/*document.getElementById("currentTime").style.outline = treu
	
	color = 'orange';*/
