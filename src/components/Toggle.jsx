import { Thermometer } from "lucide-react";
import Button from "./UI/Button";
const Toggle = ({toggle,setToggle})=>{
    const handleCelsius=()=>{
        setToggle(false);
    }
    const handleFahrenheit=()=>{
        setToggle(true);
    }
    return(
        <div class="flex justify-center">
            <div class="flex items-center gap-2 bg-white/40 backdrop-blur-lg border border-white/30 rounded-full p-1 shadow-lg">
            <Button class={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${!toggle?`bg-gradient-to-r from-cyan-500to-blue-500 text-white shadow-md`:` text-gray-700 hover:bg-white/50`}`}  onClick={handleCelsius}>
            <Thermometer/>
            <span class="font-semibold">°C</span>
            </Button>
            <Button class={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${toggle?`bg-gradient-to-r from-cyan-500to-blue-500 text-white shadow-md`:` text-gray-700 hover:bg-white/50`}`} onClick={handleFahrenheit}>
            <Thermometer/><span class="font-semibold">°F</span>
            </Button>
            </div>
            </div>
    )
}
export default Toggle;