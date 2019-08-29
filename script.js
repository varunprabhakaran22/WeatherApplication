const cityList = [
    { name: "Chennai", state: "Tamil nadu",climate:"Hot", degree: 28},
    { name: "Bangalore", state:"Karnataka",climate:"cloudy", degree: 22},
    { name: "Hyderabad", state: "Telengana",climate:"clear", degree: 25},
    { name: "Thiruvanandhapuram", state: "Kerala",climate:"Rainy", degree: 18},
    { name: "panaji", state: "Goa ",climate:"Rainy", degree: 20},
    { name: "New Delhi", state: "Delhi",climate:"Hot", degree: 30},
    { name: "kolkata", state: "West Bengal",climate:"Cloudy", degree: 22},
    { name: "Lucknow", state: "Uttar pradesh",climate:"Hot", degree: 34},
    { name: "Patna", state: "Bihar",climate:"Clear", degree: 26}
];


function updateWeather() {
    let currentCity = document.getElementById("cityName").value;
    var op = cityList.filter(city => { 
        if(city.name == currentCity ) {
            document.getElementsByClassName("city")[0].innerHTML = city.name;
            document.getElementsByClassName("state")[0].innerHTML = city.state;
            document.getElementsByClassName("weather")[0].innerHTML = city.climate;
            document.getElementsByClassName("dsDegree")[0].innerHTML = city.degree;
                    }
    });
}

let CELSIUS = false;
let FARANHEIT = false;
function convertDegree(x) {
    let degree = '';
    let cDegree = document.getElementsByClassName("dsDegree")[0].innerHTML;
    console.log(cDegree);
    console.log(x);
    if(x == 'c') {
        if(!CELSIUS) {
            CELSIUS = true;
            FARANHEIT = false;
            degree = (cDegree - 32) * 1.8;
            console.log(degree);
            document.getElementsByClassName("dsDegree")[0].innerHTML=degree;
        }
    }
    else {
        if(!FARANHEIT) {
            CELSIUS = false;
            FARANHEIT = true;
            degree = (cDegree * 1.8) + 32;
            console.log(degree);
            document.getElementsByClassName("dsDegree")[0].innerHTML=degree;
        }
    }
}