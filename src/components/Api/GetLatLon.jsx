import env from "dotenv";
import axios from "axios";

env.config();
export const GetLatLon = async (body)=>{
const geoAPI_URL = "http://api.openweathermap.org/geo/1.0/direct";
const geokey = import.meta.env.api_key;

try{
    const geocode = await axios.get(geoAPI_URL,{
        params:{
            q:body.location,
            appid:geokey,
        }
    });
    const response = JSON.stringify(geocode.data);
    console.log(response);
    const result = (geocode.data);
    console.log(result);
    console.log(result[0].name);
     const latitude = result[0].lat;
     const longitude = result[0].lon;
return {latitude, longitude};
}catch(error){
    throw new Error("Failed to make connection:", error.message);
}

}