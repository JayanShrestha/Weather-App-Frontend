import {APIProvider, Map, Pin} from '@vis.gl/react-google-maps';

const GoogleMap = ({className, id, ...props})=>{
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    return(
        <div className={`relative h-80 bg-gradient-to-br from-slate-200/50 to-slate-300/30 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/30 ${className}` } id={id} {...props}>
        
                 <APIProvider apiKey={apiKey} onLoad={() => console.log('Maps API has loaded.')}>
   <Map
      defaultZoom={13}
      defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
      className='w-96 h-full mx-auto mt-5'
      onCameraChanged={ (ev) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }>
   </Map>
   <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
 </APIProvider>
 </div>
            
    )
}
export default GoogleMap;