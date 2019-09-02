
//  predefined Array where data will be fetched from here to html file and vise versa
const cityList = [
    { name: "Chennai", state: "Tamil nadu",climate:"Hot", degree: 28},
    { name: "Bangalore", state:"Karnataka",climate:"cloudy", degree: 22},
    { name: "Hyderabad", state: "Telengana",climate:"clear", degree: 25},
    { name: "Thiruvananthaapuram", state: "Kerala",climate:"Rainy", degree: 18},
    { name: "Panaji", state: "Goa ",climate:"Rainy", degree: 20},
    { name: "New Delhi", state: "Delhi",climate:"Hot", degree: 30},
    { name: "kolkata", state: "West Bengal",climate:"Cloudy", degree: 22},
    { name: "Lucknow", state: "Uttar pradesh",climate:"Hot", degree: 34},
    { name: "Patna", state: "Bihar",climate:"Clear", degree: 26}
];

// to function is used to check the used input along with the arraylist and return the needed information to the html file 
 
let cityValue=document.getElementsByClassName("updateWeather")[0].addEventListener("click", function(){

        //getting the user input using the eventlistener
        let cityInput =document.getElementById("cityName").value;
        // passing the value as a parameter to class constructor
        let func=new weather(cityInput);
        console.log(cityInput)

});

// event listener used to convert degree values
let degCelsius=document.getElementsByClassName("convCelsius")[0].addEventListener("click", function(){

    //getting the user input using the eventlistener
    let degreeInput = document.getElementsByClassName("dsDegree")[0].innerHTML;
    
    // passing the value as a parameter to class constructor
    let func=new degreeConversionCelsius(degreeInput);

});


// event listener used to convert degree values
let degFahranheit=document.getElementsByClassName("convFahranheit")[0].addEventListener("click", function(){

    //getting the user input using the eventlistener
    let degreeInput = document.getElementsByClassName("dsDegree")[0].innerHTML;
    
    // passing the value as a parameter to class constructor
    let func=new degreeConversionFahranheit(degreeInput);

});



class weather{
    
    
    constructor(city){
        
        this.city=city;
        console.log(this.city)
        cityList.forEach(city => { 
            if(city.name ==this.city) {
                document.getElementsByClassName("city")[0].innerHTML= city.name;
                document.getElementsByClassName("state")[0].innerHTML= city.state;
                document.getElementsByClassName("weather")[0].innerHTML= city.climate;
                document.getElementsByClassName("dsDegree")[0].innerHTML= city.degree;

            }
        }); 
        
    }
}

let celsius=true
let fahrenheit=false
class degreeConversionCelsius{
    constructor(degreeInput){
        
        this.degreeInput=degreeInput
        if(!celsius){
            this.degreeInput =Math.round( (this.degreeInput - 32) * 0.5556);
            celsius=true
            fahrenheit=false
        }
        document.getElementsByClassName("dsDegree")[0].innerHTML=this.degreeInput; 
    }   
}

class degreeConversionFahranheit{
    constructor(degreeInput){
        this.degreeInput=degreeInput
        if(!fahrenheit){
            
                 this.degreeInput =Math.round((this.degreeInput* 1.8) + 32);
                 fahrenheit=true
                 celsius=false
        }
        console.log(this.degreeInput)
        document.getElementsByClassName("dsDegree")[0].innerHTML=this.degreeInput; 


    }
}

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
