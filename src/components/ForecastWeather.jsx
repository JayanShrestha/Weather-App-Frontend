import Card from "./UI/Card"
import Section from "./UI/Section";
import ForcastCard from "./ForcastCard";

const ForecastWeather = ({forecast, getWeatherIcon, metric})=>{
    console.log(forecast);
    const getDay=(item)=>{
        const date = new Date(item);
        return date.toLocaleDateString("en-US", {weekday:"short"});
    }
    return(
        <>
        <Section>
            <Card className="font-semibold">
                <div className="flex flex-col gap-4 items-start justify-start p-3">
                <span className="measure">5-Day Forecast</span>
                <div className="grid grid-cols-5 gap-2">
                    {forecast.map((item)=>{
                        return(
                        <ForcastCard key={item.dt_txt}>
                        <div className="flex flex-col">
                            <span className="measure">
                                {getDay(item.dt_txt)}
                            </span>
                            <span>
                            <img className="drop-shadow-lg weather-icon" src={getWeatherIcon(item)} alt={item.weather[0].description}/>
                            </span>
                            <p className="measure">
                                {Math.round(item.main.temp)} {metric}
                            </p>
                
                            <p className="text-slate-900 text-xs">
                                {item.weather[0].description}
                            </p>
                        </div>
                    </ForcastCard>
                        )
                    

                })}

                </div>
            </div>


            </Card>
            
            </Section>
            </>
    )
}
export default ForecastWeather;