import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";
import { useMemo } from "react";
import Card from "./UI/Card";
import {motion, AnimatePresence} from "framer-motion";
import Section from "./UI/Section"; 
import { WeatherIcon } from "./Weather-icons";
import toFahrenheit from "./Hooks/getFahrenheit";
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
);

const Chart = ({ weatherData, getWeatherIcon, metric, toggle})=>{
    const date = new Date();
    const  now = (date.toISOString().split("T")[0]);
    const temp = !toggle?metric:"°F";
    
    const Chartdata = useMemo(()=> {
        if(Object.keys(weatherData).length >0){
            const filteredData = weatherData.list.filter((item)=>item.dt_txt.includes(now));
            const dataset = filteredData.map((item)=>Math.round(item.main.temp));
            const labels = filteredData.map((item)=>new Date(item.dt*1000).toLocaleTimeString([],{
            timeZone: 'UTC',
            hour:'2-digit',
            minute: '2-digit',
            hour12: true
    }));    
            
            const fahrenheitData = !toggle?dataset:dataset.map((temp)=>toFahrenheit(temp));
            return{ 
                labels: labels,
                datasets: [
                {
                  label: `Temperature (${temp})`,
                  data: fahrenheitData,
                  backgroundColor: "#3b82f6",
                  borderColor: '#3b82f6',
                  tension: 0.3,
                    pointRadius: 6,
                    pointHoverRadius: 9,
                    pointHitRadius: 20,
                },
              ],
            };
        }
        return null;
    },[toggle, now]);
   const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interraction:{
        mode: 'index',
        intersect: false,
    },
    scales: {
      x: {
        ticks: {
          maxRotation: 0,
          autoSkip: true,
        },
      },
      y: {
        beginAtZero: false,
        ticks: {
          callback: (value) => `${value}°`,
        },
      },
    },
    plugins: {
      legend: { display: true },
      tooltip: {
        callbacks: {
          label: (ctx) => `Temperature: ${ctx.raw} ${temp}`,
        },
      },
    },
  };
    
    return(
        <>
         <AnimatePresence mode="wait">
            <motion.div
            key={weatherData.city.name}
            initial={{opacity: 0, y: 20, scale: 0.98}}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <Section id="chart">
        <Card className="font-semibold">
            <div className="flex justify-center items-center w-full min-h-[300px] p-2">
        <Line data={Chartdata} options={chartOptions} />
            </div>
       </Card>
        </Section>
        
            </motion.div>   
            </AnimatePresence>
       
        </>
    )
    }
    
export default Chart;