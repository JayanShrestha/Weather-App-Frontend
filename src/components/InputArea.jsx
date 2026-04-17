import Input from "./UI/Input";
import Section from "./UI/Section";
import Button from "./UI/Button";
import { MapPin } from "lucide-react";

const InputArea = ()=>{
    return(
        <>
        <Section id="input">
            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-4 min-w-full ">
               
            <Input type="text" className="min-w px-10 text-slate-900" placeholder="Search the city...." name="city" id="city"/>
                <div className="flex gap-2">
                    <Button type="submit">Search</Button>
                    <Button type="button"><span className="flex gap-2"> <MapPin/>Use My Location</span></Button>
                </div>
              </div>  
        </Section>
        
        </>
    )
}

export default InputArea;