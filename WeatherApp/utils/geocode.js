const request = require('request');

const mapBoxKey ="pk.eyJ1IjoiZGFya2FtZGhhMzciLCJhIjoiY2t0aW10eTNyMTNnZzJxbm14NTVybnU0NSJ9.3pFhUtUtGH7nFrWoobEVpg";

const geocode = (address, callback)=>{

    const mapboxURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=${mapBoxKey}`;

    request({url: mapboxURL, json: true}, (error,{body:{message}, body: {features}})=>{
        if (error){
            callback('Unable to connect to geocoding services.', undefined);
        }
        else if(message){
            callback(message,undefined)
        }
        else if(features.length === 0){
            callback('No location found', undefined);
        }
        else{
            
            callback(undefined,{
                location: features[0].place_name,
                long: features[0].center[0],
                lat: features[0].center[1]
            });
        }
    })
}

module.exports = geocode;