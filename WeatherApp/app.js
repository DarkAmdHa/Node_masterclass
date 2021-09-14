const request = require('request');
const geocode = require('./utils/geocode');
const getWeather = require('./utils/getWeather');

const address = process.argv[2];

if(address!=undefined){
    geocode(address, (error, mapBoxData)=>{
        if(error){
            return console.log(error);
        }
    
        getWeather(mapBoxData, (error,{location,weather,temp,fl} = {})=>{
            if(error){
                return console.log(error);
            }
                console.log('\nLocation: ', location);
                console.log('Weather: ', weather);
                console.log('It is currently ', temp, 'deg Celsius outside.\nIt feels like ', fl , ' though.\n');
        });
    });
}
else{
    console.log('Please provide an address.')
}


