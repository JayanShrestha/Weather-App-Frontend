import { CloudDrizzle, CloudFog, CloudLightning, CloudMoon, CloudRain, CloudSnow, CloudSun, Cloudy, MoonIcon, SunIcon } from "lucide-react";
import { CloudRainIcon } from "lucide-react";
import { Cloud } from "lucide-react";
import clearDay from '@meteocons/svg/fill/clear-day.svg';
import clearNight from '@meteocons/svg/fill/clear-night.svg';
import cloudSun from '@meteocons/svg/fill/mostly-clear-day.svg';
import cloudMoon from '@meteocons/svg/fill/mostly-clear-night.svg';
import cloudy from '@meteocons/svg/fill/cloudy.svg';
import cloudFogDay from '@meteocons/svg/fill/partly-cloudy-day-fog.svg';
import cloudFogNight from '@meteocons/svg/fill/partly-cloudy-night-fog.svg';
import cloudDrizzleDay from '@meteocons/svg/fill/partly-cloudy-day-drizzle.svg';
import cloudDrizzleNight from '@meteocons/svg/fill/partly-cloudy-night-drizzle.svg';
import cloudRainDay from '@meteocons/svg/fill/overcast-day-rain.svg';
import cloudRainNight from '@meteocons/svg/fill/overcast-night-rain.svg';
import cloudLightningDay from '@meteocons/svg/fill/thunderstorms-day.svg';
import cloudLightningNight from '@meteocons/svg/fill/clear-day.svg';
import cloudSnowDay from '@meteocons/svg/fill/overcast-day-snow.svg';
import cloudSnowNight from '@meteocons/svg/fill/overcast-night-snow.svg';
import cloudOvercastDay from '@meteocons/svg/fill/overcast-day.svg';
import cloudOvercastNight from '@meteocons/svg/fill/overcast-night.svg';
const iconMap = {
  "01d": clearDay,
  "01n": clearNight,     
  "02d": cloudSun,
  "02n": cloudMoon,
  "03d": cloudy,
  "03n": cloudy,
  "04d": cloudOvercastDay,
  "04n": cloudOvercastNight,
  "09d": cloudDrizzleDay,
  "09n": cloudDrizzleNight,
  "10d": cloudRainDay,
  "10n": cloudRainNight,
  "11d": cloudLightningDay,
  "11n": cloudLightningNight,
  "13d": cloudSnowDay,
  "13n": cloudSnowNight,
  "50d": cloudFogDay,
  "50n": cloudFogNight,
  // add more as needed
};

export const WeatherIcon = ({
  code,
  className
}) => {
  const Icon = iconMap[code];
    return <img  className= {className} src={Icon} alt="Weather Image"  />;
};
