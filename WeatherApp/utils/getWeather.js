const request = require('request');


const openWeatherKey = '341b6f12f665f1a231f5f01934c1f8ea';


const getWeather = ({lat,long,location},callback)=>{
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=${openWeatherKey}`;

    request({url:weatherURL, json: true}, (error,{body})=>{
        if (error){
            callback("Unable to connect to weather services",undefined);
        }
        else if(body.message){
            callback(body.message,undefined);
        }
        else{
            callback(undefined, {
                location,//Mapbox provides a better location name
                weather: body.weather[0].main,
                temp: body.main.temp,
                fl:body.main.feels_like
            });
        }
    });
}

module.exports = getWeather;