import Section from "./UI/Section";
import { useState } from "react";
import InputArea from "./InputArea";
import WeatherDisplay from "./WeatherDisplay";
import GoogleMap from "./GoogleMap";

const Weather = ()=>{
    const [weatherData, setWeatherData] = useState({});
    const [latlng, setlatlng] = useState(null);
    return (
        <>
       
            <InputArea setWeatherData={setWeatherData} setlatlng={setlatlng} />
            <WeatherDisplay weatherData={weatherData} />
            <GoogleMap latlng={latlng}/>
           
            </>

    )
}
export default Weather;