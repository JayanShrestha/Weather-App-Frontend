import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import useLocation from './Hooks/getLocation';
import Card from './UI/Card';
const GoogleMap = ()=>{
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    const {latlng} = useLocation();
    const isLoading = !latlng;
    return (
<>
<Card className = "w-[50%]">
  <p className='mt-2'>Current Location</p>
  {isLoading && (
        <div className="relative inset-0 flex items-center justify-center z-20 bg-transparent">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-400 border-t-transparent"></div>
        </div>
      )}
  <APIProvider apiKey={apiKey} onLoad={() => console.log('Maps API has loaded.')}>
  
   <Map
      defaultZoom={16}
      center={ latlng}
      className='w-full h-64 p-5 mx-auto border-none rounded-2xl z-0'
      onCameraChanged={ (ev) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }>
        <Marker position={latlng}
        title= "Your Location"
        />
   </Map>
 </APIProvider>
 </Card>
 </>
            
    )
}
export default GoogleMap;