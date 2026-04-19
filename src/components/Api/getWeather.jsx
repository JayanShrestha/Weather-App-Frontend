
export const GetLatLon = async (body)=>{
const API_Url = import.meta.env.VITE_BACKEND_URL;

try{
    fetch(API_Url,{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            location:body,
        })
    })
    const response = JSON.stringify(geocode.data);
    console.log(response);
    const result = (geocode.data);
    console.log(result);
    console.log(result[0].name);
     const latitude = result[0].lat;
     const longitude = result[0].lon;
return {latitude, longitude};
}catch(error){
    throw new Error("Failed to make connection:", error.message);
}

}