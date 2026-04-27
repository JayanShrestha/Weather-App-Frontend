import Section from "./UI/Section";
import { useState } from "react";
import InputArea from "./InputArea";
import WeatherDisplay from "./WeatherDisplay";
import GoogleMap from "./GoogleMap";
import useLocation from "./Hooks/getLocation";
import Toggle from "./Toggle";

const Weather = ()=>{
    const [weatherData, setWeatherData] = useState({});
    const {latlng, setlatlng} = useLocation();
    const [toggle, setToggle] = useState(false);
    const [latlngUpdate, setlatlngUpdate] = useState(false);

    return (
        <>
       
            <InputArea setWeatherData={setWeatherData} setlatlng={setlatlng} setlatlngUpdate={setlatlngUpdate} />
            <Toggle toggle={toggle} setToggle={setToggle}/>
            <WeatherDisplay weatherData={weatherData} toggle={toggle} latlng={latlng} />
           
             {!latlngUpdate && <GoogleMap latlng={latlng} />
                 
                }
            </>

    )
}
export default Weather;