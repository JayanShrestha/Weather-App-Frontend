import Input from "./UI/Input";
import Section from "./UI/Section";
import Button from "./UI/Button";
import { MapPin } from "lucide-react";
import useLocation from "./Hooks/getLocation";
import { useState } from "react";
import {locationWeather} from "./Api/getWeather";
import { coordWeather } from "./Api/getWeather";

const InputArea = ()=>{
    const {latlng, setlatlng} = useLocation();
    const [location, setLocation] = useState({location:""});
    function handleClick(e){
        e.preventDefault();
        coordWeather(latlng);

    }
    async function handleSubmit(e){
        e.preventDefault();
        const input = e.target.location.value;
        const response = await locationWeather(input);
        console.log(response);
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
        <Section id="input">
            <form className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 min-w-full -z-10 " onSubmit={handleSubmit}>
               
            <Input type="text" className="min-w px-10 text-slate-900" placeholder="Search the city...." name="location" value={location.location} id="location"
            onChange={handleChange} required/>
                <div className="flex gap-2">
                    <Button type="submit">Search</Button>
                    <Button className="button" type="button" onClick={handleClick}><span className="flex gap-2"> <MapPin/>Use My Location</span></Button>
                </div>
              </form>  
        </Section>
        
        </>
    )
}
export default InputArea;