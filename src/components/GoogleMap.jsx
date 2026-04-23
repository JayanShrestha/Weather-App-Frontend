import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import Card from './UI/Card';
import Section from './UI/Section';

const GoogleMap = ({latlng}) => {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const isLoading = !latlng;

  return (
    <>
      <Section>
        <Card className="w-full md:w-[50%]">
          <p className="mt-5 measure">Location Map</p>

          {isLoading && (
            <div className="relative inset-0 flex items-center justify-center z-0 bg-transparent">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-400 border-t-transparent"></div>
            </div>
          )}

          {!isLoading && (
            <APIProvider apiKey={apiKey}>
              <Map
                key={`${latlng?.lat}-${latlng?.lng}`}   // forces re-render when coords change
                defaultZoom={16}
                center={latlng}
                className="w-full h-64 p-5 mx-auto border-none rounded-2xl z-0"
                onCameraChanged={(ev) =>
                  console.log(
                    'camera changed:',
                    ev.detail.center,
                    'zoom:',
                    ev.detail.zoom
                  )
                }
              >
                <Marker position={latlng} title="Your Location" />
              </Map>
            </APIProvider>
          )}
        </Card>
      </Section>
    </>
  );
};

export default GoogleMap;
