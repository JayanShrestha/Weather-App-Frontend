import Section from "./UI/Section";
import Weather from "./Weather";
import CurrentWeather from "./CurrentWeather";
import ForecastWeather from "./ForecastWeather";
import DetailInfo from "./DetailInfo";
import GoogleMap from "./GoogleMap";

const WeatherDisplay = ({weatherData, toggle, latlng})=>{
    function getWeatherIcon(item){
        const iconCode = item.weather[0].icon;
        console.log(weatherData.list[0]);
        return iconCode;

    }
    if(weatherData ===undefined){
        return;
    }
    return (Object.keys(weatherData).length>0)?( 
            <Section>
            <div className="grid md:grid-cols-2 gap-4">
            <div className="grid">
            <CurrentWeather toggle={toggle} current={weatherData.list[0]} city={weatherData.city.name} country={weatherData.city.country} metric={"°C"} getWeatherIcon={getWeatherIcon} />
            <GoogleMap latlng={latlng}/>
            </div>
           
            <div className="grid">
                 <DetailInfo current={weatherData.list[0]} detail={weatherData} city={weatherData.city.name} toggle={toggle} metric={"°C"}/>
            <ForecastWeather toggle={toggle} forecast={weatherData.list.filter((item)=>item.dt_txt.includes("12:00:00"))} city={weatherData.city.name} metric={"°C"} getWeatherIcon={getWeatherIcon} />
            </div>
            </div>
            </Section>):("")// checking the received object is empty and render accordingly
              
    
}
export default WeatherDisplay;