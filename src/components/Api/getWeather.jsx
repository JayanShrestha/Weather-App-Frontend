const API_Url = import.meta.env.VITE_BACKEND_URL;
export const locationWeather = async (body)=>{
try{
    const response = await fetch(API_Url+"curweather",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            location:body,
        })
    });
    const data = await response.json();
return data;
}catch(error){
    throw new Error(`Failed to make Connection: ${error.message}`);
}

}

export const coordWeather = async (body)=>{
    console.log(body);
    try{
        const response = await fetch(API_Url+"corweather",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                latitude:body.lat,
                longitude:body.lng,
            })

        });
        const data = await response.json();
        return data;

    }
    catch(error){
        throw new Error(`Failed to make Connection: ${error.message}`);

    }
}

export const getLatLon = async(body)=>{
    try{
        const response = await fetch(API_Url +"getlatlng",{
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                location:body,
            })
        });
        const data = await response.json();
        console.log(data.data[0].lat, data.data[0].lon);
        return data;
        
    }
    catch(error){
        throw new Error (`Failed to make connection; ${error.message}`);
    }
}