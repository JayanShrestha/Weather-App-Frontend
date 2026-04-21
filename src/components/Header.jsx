import { Cloud } from "lucide-react";
import Section from "./UI/Section";
const Header = ()=>{
    return(
    <Section>
 <div className="border flex flex-col border-none">
           <span className="flex justify-center items-center"> 
            <span className="px-2">
                 <Cloud size={64}/>
            </span>
          
            <h1 className=" text-2xl md:text-5xl ">
                Weather Dashboard
            </h1>
            </span>
           
            <p> Get real-time weather updates and forecasts for any location</p>

        </div>
    </Section>
       
       
    )
}
export default Header;