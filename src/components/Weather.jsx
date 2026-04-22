import Section from "./UI/Section";
import { useState, useEffect } from "react";
import InputArea from "./InputArea";
import WeatherDisplay from "./WeatherDisplay";
const Weather = ()=>{
    const [weatherData, setWeatherData] = useState({});
    
    // Test: Log whenever weatherData is updated
    useEffect(() => {
        console.log("✓ weatherData updated:", weatherData);
    }, [weatherData]);
    
    return (
        <>
       
            <InputArea setWeatherData={setWeatherData}/>
            <WeatherDisplay weatherData={weatherData}/>
           
            </>

    )
}
export default Weather;