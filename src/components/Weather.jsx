import Section from "./UI/Section";
import { useState } from "react";
import InputArea from "./InputArea";
import WeatherDisplay from "./WeatherDisplay";
import GoogleMap from "./GoogleMap";
import useLocation from "./Hooks/getLocation";

const Weather = ()=>{
    const [weatherData, setWeatherData] = useState({});
    const {latlng, setlatlng} = useLocation();
    return (
        <>
       
            <InputArea setWeatherData={setWeatherData} setlatlng={setlatlng} />
            <WeatherDisplay weatherData={weatherData} />
            <GoogleMap latlng={latlng}/>
           
            </>

    )
}
export default Weather;