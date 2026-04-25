import Card from "./UI/Card"
import Section from "./UI/Section";
import ForcastCard from "./ForcastCard";
import { WeatherIcon } from "./Weather-icons";
import { AnimatePresence} from "framer-motion";
import { motion } from "framer-motion";
import toFahrenheit from "./Hooks/getFahrenheit";
const ForecastWeather = ({forecast, city, getWeatherIcon, metric, toggle})=>{
    const getDay=(item)=>{
        const date = new Date(item);
        return date.toLocaleDateString("en-US", {weekday:"short"});
    }
     if(!forecast) return null;
    return(
        <AnimatePresence mode="wait">
            <motion.div
            key={city}
            initial={{opacity: 0, y: 20, scale: 0.98}}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <Section>
            <Card className="font-semibold">
                <div className="flex flex-col gap-4 items-start justify-start p-3">
                <span className="measure">5-Day Forecast</span>
                <div className="grid grid-cols-5 gap-2 w-full">
                    {forecast.map((item)=>{
                         const fahrenheit =Math.round(toFahrenheit(item.main.temp));
                        return(
                        <ForcastCard key={item.dt_txt} className="py-8">
                        <div className="flex flex-col items-center">
                            <span className="measure">
                                {getDay(item.dt_txt)}
                            </span>
                            <span>
                             <WeatherIcon code={getWeatherIcon(item).replace("n", "d")} className="h-8 w-8 md:h-12 md:w-12" />
                            </span>
                            <p className="measure">
                                {!toggle?Math.round(item.main.temp):fahrenheit} {!toggle?metric:"°F"}
                            </p>
                
                            <p className="text-slate-900 text-[10px] md:text-sm">
                                {item.weather[0].description.split(" ").map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")}
                            </p>
                        </div>
                    </ForcastCard>
                        )
                    

                })}

                </div>
            </div>


            </Card>
            
            </Section>
        </motion.div>
        </AnimatePresence>
        
            
    )
}
export default ForecastWeather;