import { Droplet, Droplets, Eye, Wind } from "lucide-react";
import Card from "./UI/Card";
import Section from "./UI/Section";

const CurrentWeather = ({current, city, country, metric, getWeatherIcon })=>{
    console.log(current);
    return(
        <Section id="currentweather">
       <Card className="text-slate-900 font-semibold">
        <div className="py-4">
        <div className="flex items-center justify-between p-6">
            <span>{city}, {country}</span>
            <img className="drop-shadow-lg animate-bounce weather-icon" src={getWeatherIcon(current)} alt={current.weather[0].description}/>

        </div>
        <div className="grid items-center justify-center py-4">
             <span><h1 className="text-slate-900">{Math.round(current.main.temp)} {metric}</h1></span>
             <span className="text-xl -mt-2">{current.weather[0].description.split(" ").map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ")} </span>
             <span className="text"> Feels like {Math.round(current.main.feels_like)} {metric}</span>
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
                <span className="grid grid-flow-col md:grid-cols-2 py-4 border-none rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/10 backdrop-blur-sm">
                    <div className="flex items-center justify-start pl-2">
                        <Wind className="text-green-500"/>
                        <span className="flex flex-col items-start pl-2">
                        <p className="text">Wind Speed</p>
                        <p className="measure">{current.wind.speed} m/s</p>
                    </span>
                    </div>
                    <span>{""}</span>
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
                        <p className="measure">{(current.visibility)/1000} Km</p>
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

    )
}
export default CurrentWeather;