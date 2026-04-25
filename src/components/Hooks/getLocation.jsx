import { useState, useEffect } from "react";
const useLocation = ()=>{
    const [ latlng, setlatlng] = useState(null);
    async function requestFreshPermission(){
        try{
            const status = await navigator.permissions.query({name:"geolocation"});

            if(status.state === "granted" || status.state ==="denied"){
                if(navigator.permissions.revoke){
                    await navigator.permissions.revoke({name:"geolocation"});
                }
            }
        }
        catch(err){
            console.log("Permissions API not fully supported", err);
        }
    }
    async  function getCoord (){
        if(!navigator.geolocation){
            console.log("Sorry, Your browser does not support Geo Locaiton, Please update your browser to enjoy it");
            return;
        }
       await requestFreshPermission();
        navigator.geolocation.getCurrentPosition(
      displayLocation,
      showError,
      { enableHighAccuracy: true }
    );
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
        console.log(`Current latitude and longitude is ${latlng.lat} ${latlng.lng}`);
        setlatlng(latlng);
    }
     useEffect(()=>{
        getCoord();
    },[]);
    return {latlng, setlatlng, getCoord};
}
export default useLocation;