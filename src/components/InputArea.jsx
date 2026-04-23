import Input from "./UI/Input";
import Section from "./UI/Section";
import Button from "./UI/Button";
import { MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import {locationWeather} from "./Api/getWeather";
import { coordWeather } from "./Api/getWeather";
import { getLatLon } from "./Api/getWeather";
import Toast from "./Toast";
import useLocation from "./Hooks/getLocation";

const InputArea = ({setWeatherData, setlatlng})=>{
    const [location, setLocation] = useState({location:""});
    const [currentLocation, setCurrentLocation] = useState(false);
    const message = `Enter the city name correctly, city or suburb name followed by comma, and country initial such as ", AU"`;
    const showToast = true;
    const {latlng} = useLocation();
    setlatlng(latlng);

    useEffect(() => {
  const timer = setTimeout(() => {
    setCurrentLocation(true);
  }, 2000);

  return () => clearTimeout(timer);
}, []);
    async function handleClick(e){
        e.preventDefault();
        const response = await coordWeather(latlng);
        console.log(response.data);
        setWeatherData(response.data);
    }
    async function handleSubmit(e){
        e.preventDefault();

        const input = e.target.location.value;

        // 1. Get coordinates
        const coord = await getLatLon(input);
        const lat = coord.data[0].lat;
        const lng = coord.data[0].lon;
        setlatlng({ lat, lng });

        // 2. Get weather
        const response = await locationWeather(input);
        setWeatherData(response.data);
        setLocation({location:""})
    }
    function handleChange(e){
       const{name, value} = e.target;
       setLocation((prevalue)=>{
        return{ 
            ...prevalue,
        [name]:value,}
       });
    }
    return(
        <>
         {showToast && <Toast message={message} />}
        <Section id="input">
            <form className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 px-10 -z-10" onSubmit={handleSubmit}>
               
            <Input type="text" className="min-w px-10 text-slate-900 dark:text-slate-200" placeholder="Search the city...." name="location" value={location.location} id="location"
            onChange={handleChange} required/>
                <div className="flex gap-2">
                    <Button type="submit">Search</Button>
                    <Button className={`button ${!currentLocation?"translate-x-5 opacity-0":"translate-x-0 opacity-1"}`} type="button" onClick={handleClick}><span className="flex gap-1"> <MapPin/>Use My Location</span></Button>
                </div>
              </form>
             
        </Section>
        
        </>
    )
}
export default InputArea;