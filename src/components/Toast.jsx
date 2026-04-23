import { useState } from "react";
import Button from "./UI/Button";
const Toast = ({message, error})=>{
    const [show, setShow] = useState(true);
    function close(){
        setShow(false);
    }
    const onLoad=()=>{
         return(
        <>
        <div className={`${show?`absolute z-10 inset-0 bg-black/40 backdrop-blur-lg `:`hidden`}`} onClick={close}></div>
        <div className={`absolute z-50 w-fit text-white top-[25%] mx-[25%] flex items-center justify-center p-4 border-none rounded-2xl bg-gradient-to-br from-blue-500/50 to-cyan-200/20 transition-all ${show?`translate-y-0 opacity-1`:`translate-y-10 opacity-0`} `}>
            <span>{message}</span>
            <Button className="ml-2" onClick={close}>X</Button>
        </div>
        </>

    )
}
    const onError = ()=>{
        return(
             <>
        <div className={`${show?`absolute z-10 inset-0 bg-black/40 backdrop-blur-lg `:`hidden`}`} onClick={close}></div>
        <div className={`absolute z-50 w-fit text-white top-[25%] flex items-center justify-center p-4 border-none rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-200 transition-all ${show?`translate-y-0 opacity-1`:`translate-y-10 opacity-0`} `}>
            <span className=" drop-shadow-lg">{error}</span>
            <Button className="ml-2 p-0" onClick={close}>X</Button>
        </div>
        </>
        )
    }
   return error?onError():onLoad();
}
export default Toast;