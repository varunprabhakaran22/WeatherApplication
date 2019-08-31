
//  predefined Array where data will be fetched from here to html file and vise versa
const cityList = [
    { name: "Chennai", state: "Tamil nadu",climate:"Hot", degree: 28},
    { name: "Bangalore", state:"Karnataka",climate:"cloudy", degree: 22},
    { name: "Hyderabad", state: "Telengana",climate:"clear", degree: 25},
    { name: "Thiruvanandhapuram", state: "Kerala",climate:"Rainy", degree: 18},
    { name: "Panaji", state: "Goa ",climate:"Rainy", degree: 20},
    { name: "New Delhi", state: "Delhi",climate:"Hot", degree: 30},
    { name: "kolkata", state: "West Bengal",climate:"Cloudy", degree: 22},
    { name: "Lucknow", state: "Uttar pradesh",climate:"Hot", degree: 34},
    { name: "Patna", state: "Bihar",climate:"Clear", degree: 26}
];

// to function is used to check the used input along with the arraylist and return the needed information to the html file 

function updateWeather() {
    let currentCity = document.getElementById("cityName").value;
    var op = cityList.filter(city => { 
        if(city.name == currentCity ) {
            document.getElementsByClassName("city")[0].innerHTML= city.name;
            document.getElementsByClassName("state")[0].innerHTML= city.state;
            document.getElementsByClassName("weather")[0].innerHTML= city.climate;
            document.getElementsByClassName("dsDegree")[0].innerHTML= city.degree;
                    }
    });
}

// function to convert values from celsius to fahrenheit based on the formula
//  and those values are sended back to the html file
let CELSIUS = true;
let FAHRENHEIT = false;
function convertToFahrenheit(x){
    let degree = '';
    let cDegree = document.getElementsByClassName("dsDegree")[0].innerHTML;
    console.log(cDegree);
    console.log(x);
        if(!CELSIUS) {
            CELSIUS = true;
            FAHRENHEIT = false;
            degree =Math.round( (cDegree - 32) * 0.5556);
            console.log(degree);
            document.getElementsByClassName("dsDegree")[0].innerHTML=degree;
            
        }
}

// function to convert values from fahrenheit to celsius based on the formula
//  and those values are sended back to the html file

function convertToCelsius(x){
    let degree = '';
    let cDegree = document.getElementsByClassName("dsDegree")[0].innerHTML;
    console.log(cDegree);
    console.log(x);    
        if(!FAHRENHEIT) {
            CELSIUS = false;
            FAHRENHEIT = true;
            degree =Math.round((cDegree * 1.8) + 32);
            console.log(degree);
            document.getElementsByClassName("dsDegree")[0].innerHTML=degree;
        }
    
}

// getting the date and time from the system 

function getDay(){
let date=new Date()
let dayValue=date.getDay();
let time = date.getHours();
let minute=date.getMinutes();
if(minute<10){
    minute='0'+minute;
}
var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

let day=weekday[dayValue]  
document.getElementsByClassName("dtDay")[0].innerHTML=day
document.getElementsByClassName("dtTime")[0].innerHTML=time;
document.getElementsByClassName("dtMinute")[0].innerHTML=minute;

}
