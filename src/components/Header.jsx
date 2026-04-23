import { Cloud } from "lucide-react";
import Section from "./UI/Section";
import Card from "./UI/Card";
const Header = ()=>{
    return(
    <Section>
 <div className="border flex flex-col border-none justify-center items-center">
           <span className="flex justify-center items-center"> 
            <span className="px-2">
                 <Cloud size={64}/>
            </span>
          
            <h1 className=" text-2xl md:text-5xl ">
                Weather Dashboard
            </h1>
            </span>
           
            <p> Get real-time weather updates and forecasts for any location</p>
            <Card className="w-fit m-2 flex items-center justify-center">
            <p className="p-2 text-xs text-slate-900 animate-pulse">Powered by OpenWeather API and Google Maps API</p>
            </Card>
            

        </div>
    </Section>
       
       
    )
}
export default Header;