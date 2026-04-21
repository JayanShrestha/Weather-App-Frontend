import { useState, useEffect } from "react";
const useLocation = ()=>{
    const [ latlng, setlatlng] = useState(null);
    function getCoord (){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(displayLocation, showError, {enableHighAccuracy:true});
        }
        else{
            console.log("Sorry, Your browser does not support Geo Locaiton, Please update your browser to enjoy it");
        }
    }
    function showError(error){
        const messages = {
            1: "You denied the request for your location",
            2: "Your location information is unavailable.",
            3: "Your request timed out",
            0: "An unknown error occured"
        };
        console.error(messages[error.code]);
    }
    function displayLocation(position){
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const latlng = {lat, lng};
        console.log(`Current latitude is ${lat} and longitude is ${lng}`);
        setlatlng(latlng);
    }
     useEffect(()=>{
        getCoord();
        console.log(latlng);
    },[]);
    return {latlng, setlatlng};
}
export default useLocation;