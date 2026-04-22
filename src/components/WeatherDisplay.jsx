import Section from "./UI/Section";
import Weather from "./Weather";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";

const WeatherDisplay = ({weatherData})=>{
    function getWeatherIcon(item){
        const icon = item.weather[0].icon;
        return `https://openweathermap.org/img/wn/${icon}@2x.png`;
    }
    return (Object.keys(weatherData).length>0)?( 
            <Section>
            <CurrentWeather current={weatherData.list[0]} city={weatherData.city.name} country={weatherData.city.country} metric={"°C"} getWeatherIcon={getWeatherIcon}/>
            <ForecastWeather forecast={weatherData.list.filter((item)=>item.dt_txt.includes("12:00:00"))} metric={"°C"} getWeatherIcon={getWeatherIcon}/>
            
            </Section>):("")// checking the received object is empty and render accordingly
              
    
}
export default WeatherDisplay;