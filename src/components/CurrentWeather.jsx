import { Droplet, Droplets, Eye, Wind } from "lucide-react";
import Card from "./UI/Card";
import Section from "./UI/Section";
import { WeatherIcon } from "./Weather-icons";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import toFahrenheit from "./Hooks/getFahrenheit";

const CurrentWeather = ({current, city, country, metric, getWeatherIcon, toggle })=>{
    const temp = current?Math.round(current.main.temp):0;
    const fahrenheit =Math.round(toFahrenheit(temp));
     if(!current) return null;
    return(
        <AnimatePresence mode="wait">
            <motion.div
            key={city}
            initial={{opacity: 0, y: 20, scale: 0.98}}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <Section id="currentweather">
       <Card className="font-semibold">
        <div className="py-4">
        <div className="flex items-center justify-between px-6 ">
            <span className="text-slate-900 ">{city}, {country}</span>
            <WeatherIcon code={getWeatherIcon(current)} className="w-32 h-32 drop-shadow-xl"/>

        </div>
        <div className="grid items-center justify-center py-4">
             <span><h1 className="text-slate-900">{!toggle?Math.round(current.main.temp):fahrenheit} {!toggle?metric:"°F"}</h1></span>
             <span className="text-xl -mt-2 text-slate-900 ">{current.weather[0].description.split(" ").map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")} </span>
             <span className="text"> Feels like {!toggle?Math.round(current.main.feels_like):fahrenheit} {!toggle?metric:"°F"}</span>
        </div>
        <div className="grid grid-flow-col grid-cols-2 gap-3 px-6">
            <Card>
                <span className="grid grid-flow-col py-4 border-none rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/10 backdrop-blur-sm">
                    <div className="flex items-center justify-start pl-2">
                         <Droplets className="text-blue-500"/>
                        <span className="flex flex-col items-start pl-2">
                        <p className="text">Humidity</p>
                        <p className="measure">{current.main.humidity}%</p>
                    </span>
                    </div>
                   
                </span>
            </Card>
             <Card>
                <span className="grid grid-flow-col py-4 border-none rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 backdrop-blur-sm">
                    <div className="flex items-center justify-start pl-2">
                        <Wind className="text-green-500"/>
                        <span className="flex flex-col items-start pl-2">
                        <p className="text">Wind Speed</p>
                        <p className="measure">{current.wind.speed} m/s</p>
                    </span>
                    </div>
                </span>
            </Card>
            
        </div>
        <div className="grid grid-flow-col gap-4 px-6 mt-4">
            <Card>
                <span className="grid grid-flow-col py-4 border-none rounded-2xl bg-gradient-to-br from-purple-500/20 to-indigo-500/10 backdrop-blur-sm">
                    <div className="flex items-center justify-start pl-2">
                         <Eye className="text-purple-500"/>
                        <span className="flex flex-col items-start pl-2">
                        <p className="text">Visibility</p>
                        <p className="measure">{(current.visibility)} M</p>
                    </span>
                    </div>
                   
                </span>
            </Card>
             <Card>
                <span className="grid grid-flow-col  py-4 border-none rounded-2xl bg-gradient-to-br from-orange-500/20 to-amber-500/10 backdrop-blur-sm">
                    <div className="flex items-center justify-start pl-2">
                        <Wind className="text-orange-500"/>
                        <span className="flex flex-col items-start pl-2">
                        <p className="text">Pressure</p>
                        <p className="measure">{current.main.pressure} hPa</p>
                    </span>
                    </div>
                
                </span>
            </Card>
            
        </div>
        </div>
        </Card>
        </Section>
        </motion.div>
        </AnimatePresence>
        

    )
}
export default CurrentWeather;