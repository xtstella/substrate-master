"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FebNumberOfDays = "";
class DateSubstrate {
    constructor() {
        this.date = new Date();
        this.day = this.date.getDay();
        this.month = this.date.getMonth();
        this.year = this.date.getFullYear();
    }
}
class CellSubstrate {
    constructor(dateSubstrate) {
        this.color = "white";
        //this.color = "rgb(40,50,60)";
        //this.color = "#ffbbaa";
    }
}
class DataSubstrate {
    constructor() {
        /*		_d3.csv("./data.csv", function(data){
                    console.log("this is the data", data);
                    data.forEach(function(item){
                        this.keys = _d3.keys(item);
                        var array = []
                        for(var key in item) {
                            array.push(item[key]);
                        }
                        this.values.push(array);
                    });
                });
                */
        console.log(this.values);
    }
}
class Activity {
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
class TableSubstrate {
}
class ShapeSubstrate {
}
var data = new DataSubstrate();
var dateObj = new DateSubstrate();
var cellObj = new CellSubstrate(dateObj);
document.getElementById("currentTime").insertAdjacentText('beforeend', dateObj.date.toString());
/*document.getElementById("currentTime").style.outline = treu
    
    color = 'orange';*/
