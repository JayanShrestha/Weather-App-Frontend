import Input from "./UI/Input";
import Section from "./UI/Section";
import Button from "./UI/Button";
import { MapPin, Search } from "lucide-react";
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
    const [errorToast, setErrorToast] = useState(false);
    const [errorMessage, setErrorMessage] =useState(" "); 
    const {latlng, getCoord} = useLocation();

    useEffect(() => {
  const timer = setTimeout(() => {
    setCurrentLocation(true);
  }, 2000);

  return () => clearTimeout(timer);
}, []);
    async function handleClick(e){
        e.preventDefault();
        getCoord();
        try{
        const response = await coordWeather(latlng);
        setlatlng(latlng);
        console.log(response.data);
        setWeatherData(response.data);
        }
        
        catch(error){
        setErrorToast(true);
        setErrorMessage(`Enable location on your device, and please try again.`);
        console.log(error.message);
     
    }
}
    async function handleSubmit(e){
        e.preventDefault();

        const input = e.target.location.value;
        try{
             const coord = await getLatLon(input);
        const lat = coord.data[0].lat;
        const lng = coord.data[0].lon;
        setlatlng({ lat, lng });
        setLocation({location:" "});
        const response = await locationWeather(input);
        setWeatherData(response.data);
      
        }
        catch(error){
            setErrorToast(true);
            setErrorMessage(`Error from server, please try again later. `);
            console.log(error.message);
        }
        
    
    }
    function handleChange(e){
       const{name, value} = e.target;
       setLocation((prevalue)=>{
        return{ 
            ...prevalue,
        [name]:value,}
       });
    }
    function handleClose(){
        setErrorToast(false);
        setErrorMessage(" ");
    }
    return(
        <>
         {showToast && <Toast message={message} />}
         {errorToast && <Toast message={errorMessage} error={errorToast} OnClick={handleClose}/>}
        <Section id="input">
            <form className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 px-10 -z-10" onSubmit={handleSubmit}>
               
            <Input type="text" className="min-w px-10 text-slate-900 dark:text-slate-200" placeholder="Search the city...." name="location" value={location.location} id="location"
            onChange={handleChange} required/>
                <div className="flex gap-2 text-xs md:text-sm justify-center items-center">
                    <Button type="submit" className={`flex gap-2`}><Search className="md:hidden" size={16}/><Search className="hidden md:block"/> Search</Button>
                    <Button className={`button flex gap-2 ${!currentLocation?"translate-x-96 opacity-0 hidden":"translate-x-0 opacity-1"}`} type="button" onClick={handleClick}> <MapPin className="md:hidden" size={16}/><MapPin className="hidden md:block"/>Use My Location</Button>
                </div>
              </form>
             
        </Section>
        
        </>
    )
}

export default InputArea;