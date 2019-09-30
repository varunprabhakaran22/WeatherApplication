let cityName
let countryName
let jsonFile
let celcius
let climate
document.querySelector(".searchButton").addEventListener("click", function () {
    cityName = document.querySelector(".inputBox").value;
    $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid=32c1955a9aeef50cf4669db5dd1cd839&units=metric',
        dataType: "json",
        type: 'GET',
        success: function (data) {
            jsonFile=data
            console.log(jsonFile);
            celcius=Math.round(jsonFile.main.temp);
            document.getElementsByClassName("dsDegree")[0].innerHTML=celcius;
            cityName=jsonFile['name'];
            document.getElementsByClassName("city")[0].innerHTML=cityName;
            countryName=jsonFile.sys.country;
            document.getElementsByClassName("state")[0].innerHTML=countryName;
            climate=jsonFile['weather'][0]['description']
            document.getElementsByClassName("climate")[0].innerHTML=climate;
            console.log(climate)
            console.log('Success')
        },
        error: function(error){
            console.log(error);
        }
    });
    getDay();
});

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








// API KEY 32c1955a9aeef50cf4669db5dd1cd839