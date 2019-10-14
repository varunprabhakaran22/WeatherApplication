let cityName
let countryName
let jsonFile
let celcius
let climate
let celsius=true
let fahrenheit=false
let icon
let conversion



init()

// url: 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=32c1955a9aeef50cf4669db5dd1cd839&units=metric',
       
function init(){
    document.querySelector(".searchButton").addEventListener("click", function () {
        cityName = document.querySelector(".inputBox").value;
        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            data: {q: cityName, appid: "32c1955a9aeef50cf4669db5dd1cd839", units : "metric"},
            dataType: "json",
            type: 'GET',
            success: function (data) {
                jsonFile=data
                passingValueToHtml(jsonFile)
                diplayProgressScreen()
            },
            error: function(error){
                console.log(error);
            }
        });
    });
}

function passingValueToHtml(){
    celcius=Math.round(jsonFile.main.temp);
    document.getElementsByClassName("dsDegree")[0].innerHTML=celcius;
    cityName=jsonFile['name'];
    document.getElementsByClassName("city")[0].innerHTML=cityName;
    countryName=jsonFile.sys.country;
    document.getElementsByClassName("state")[0].innerHTML=countryName;
    climate=jsonFile['weather'][0]['description']
    document.getElementsByClassName("climate")[0].innerHTML=climate;
    icon=jsonFile['weather'][0]['icon']
    iconurl="http://openweathermap.org/img/w/"+ icon+".png";
    document.getElementById('icon').src = iconurl;    
    getDay();    
}

function diplayProgressScreen(){
    $(document).ajaxStart(function(){
        $('#loading').show();
        $('#icon').show();
        }).ajaxStop(function(){
        $('#loading').hide();
    });
}

 
// event listener used to convert degree values
document.getElementsByClassName("convCelsius")[0].addEventListener("click", function(){
    // passing the value as a parameter to class constructor
    conversion = new weather()
    conversion.conversionToCelsius();
});


// event listener used to convert degree values
document.getElementsByClassName("convFahranheit")[0].addEventListener("click", function(){
    degreeInput = celcius
    // passing the value as a parameter to class constructor
    let func=new degreeConversionFahranheit(degreeInput);
});

class weather{
    constructor(degreeInput){
        this.degreeInput = degreeInput
    }
         conversionToCelsius(){
            if(!celsius){
                document.getElementsByClassName("dsDegree")[0].innerHTML=celcius;
                celsius=true
                fahrenheit=false
            }
        }
}

let  w= new weather()
w.conversionToCelsius;

class degreeConversionFahranheit{
    constructor(degreeInput){
        this.degreeInput=degreeInput
        if(!fahrenheit){
                 this.degreeInput =Math.round((this.degreeInput* 1.8) + 32);
                 fahrenheit=true
                 celsius=false
                 console.log(fahrenheit)
                 document.getElementsByClassName("dsDegree")[0].innerHTML=this.degreeInput; 
        }
    }
}

function getDay(){
    let date=new Date()
    let dayValue=date.getDay();
    let time = date.getHours();
    let minute=date.getMinutes();
    let weekday = ["Sunday", "Monday","Tuesday ","Wednesday","Thursday","Friday", "Saturday" ]
    if(minute<10){
        minute='0'+minute;
    }   
    let day=weekday[dayValue]  
    document.getElementsByClassName("dtDay")[0].innerHTML=day
    document.getElementsByClassName("dtTime")[0].innerHTML=time;
    document.getElementsByClassName("dtMinute")[0].innerHTML=minute;
    
}

// API KEY 32c1955a9aeef50cf4669db5dd1cd839