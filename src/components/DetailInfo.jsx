import Section from "./UI/Section"
import Card from "./UI/Card";
import { Gauge, Sunrise, Sunset } from "lucide-react";
import toFahrenheit from "./Hooks/getFahrenheit";
import {motion, AnimatePresence} from "framer-motion";

const DetailInfo = ({current, detail, toggle, metric, city})=>{
     const temp = current?Math.round(current.main.temp):0;
        const fahrenheit =Math.round(toFahrenheit(temp));
         if(!current) return null;
    function getTime(item){
    const date = new Date(item*1000);
    return date.toLocaleTimeString([],{
        hour:'2-digit',
        minute: '2-digit', 
        second: '2-digit', 
        hour12: true
    });
}
    const population= detail.city.population.toLocaleString('en-US');
    function setPopulation(item){
        if (item>0) return item;
        return ("N/A");
    }
    return(
<Section id="detailinfo">
    <AnimatePresence mode="wait">
            <motion.div
            key={city}
            initial={{opacity: 0, y: 20, scale: 0.98}}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
<Card className="font-semibold">
    <div className="grid py-4">
        <p className="measure  px-6 flex justify-start">
            <span>Detailed Information</span>
            </p>
        <div className="py-[1.6rem]">
        <div className="grid grid-flow-col gap-4 px-6 mt-4">
            <Card>
                <span className="grid grid-flow-col py-4 border-none rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 backdrop-blur-sm">
                    <div className="flex items-center justify-start pl-2">
                         <Sunrise className="text-amber-500"/>
                        <span className="flex flex-col items-start pl-2">
                        <p className="text">Sunrise</p>
                        <p className="measure">{getTime(detail.city.sunrise)} </p>
                    </span>
                    </div>
                   
                </span>
            </Card>
             <Card>
                <span className="grid grid-flow-col  py-4 border-none rounded-2xl bg-gradient-to-br text-gray-500/20 to-slate-600/10 backdrop-blur-sm">
                    <div className="flex items-center justify-start pl-2">
                        <Sunset className="text-gray-500"/>
                        <span className="flex flex-col items-start pl-2">
                        <p className="text">Sunset</p>
                        <p className="measure">{getTime(detail.city.sunset)} </p>
                    </span>
                    </div>
                
                </span>
            </Card>

            
        </div>
        <div className="grid grid-flow-col gap-4 px-6 mt-4">
            <Card>
                <span className="grid grid-flow-col py-4 border-none rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-500/10 backdrop-blur-sm">
                    <div className="flex items-center justify-start pl-2">
                         <Gauge className="text-blue-600 rotate-180"/>
                        <span className="flex flex-col items-start pl-2">
                        <p className="text">Min Temp</p>
                        <p className="measure">{!toggle?Math.round(current.main.temp_min):fahrenheit} {!toggle?metric:"°F"}</p>
                    </span>
                    </div>
                   
                </span>
            </Card>
             <Card>
                <span className="grid grid-flow-col  py-4 border-none rounded-2xl bg-gradient-to-br from-red-500/20 to-rose-500/10 backdrop-blur-sm">
                    <div className="flex items-center justify-start pl-2">
                        <Sunset className="text-rose-500"/>
                        <span className="flex flex-col items-start pl-2">
                        <p className="text">Max Temp</p>
                        <p className="measure">{!toggle?Math.round(current.main.temp_max):fahrenheit} {!toggle?metric:"°F"}</p>
                    </span>
                    </div>
                
                </span>
            </Card>
           
            
        </div>
        <div className="grid grid-cols-2 gap-4 px-6 mt-4">
            <Card>
                <span className="grid grid-flow-col py-4 border-none rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 backdrop-blur-sm">
                    <div className="flex items-center justify-start pl-2">
                         <Sunrise className="text-purple-500"/>
                        <span className="flex flex-col items-start pl-2">
                        <p className="text">Clouds</p>
                        <p className="measure">{(current.clouds.all)} %</p>
                    </span>
                    </div>
                   
                </span>
            </Card>
             <Card>
                <span className="grid grid-flow-col  py-4 border-none rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 backdrop-blur-sm">
                    <div className="flex items-center justify-start pl-2">
                        <Sunset className="text-orange-500"/>
                        <span className="flex flex-col items-start pl-2">
                        <p className="text">Precipitation</p>
                        <p className="measure">{(current.pop)*100} %</p>
                    </span>
                    </div>
                
                </span>
            </Card>
            
            
            
        </div>
         <div className="grid grid-flow-col gap-4 px-6 mt-4">
            <Card>
                <span className="grid grid-flow-col py-4 border-none rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-sm">
                    <div className="flex items-center justify-start pl-2">
                         <Sunrise className="text-cyan-500"/>
                        <span className="flex flex-col items-start pl-2">
                        <p className="text">Population</p>
                        <p className="measure">{setPopulation(population)} </p>
                    </span>
                    </div>
                   
                </span>
            </Card>
             <Card>
                <span className="grid grid-flow-col  py-4 border-none rounded-2xl bg-gradient-to-br from-red-500/20 to-rose-500/10 backdrop-blur-sm">
                    <div className="flex items-center justify-start pl-2">
                        <Sunset className="text-rose-500"/>
                        <span className="flex flex-col items-start pl-2">
                        <p className="text">direction</p>
                        <p className="measure">{current.wind.deg} °</p>
                    </span>
                    </div>
                
                </span>
            </Card>
            
            
            
        </div>
        </div>
    </div>

</Card>
</motion.div>
</AnimatePresence>
</Section>
    )
}
export default DetailInfo