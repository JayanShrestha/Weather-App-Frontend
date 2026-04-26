import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import Card from './UI/Card';
import Section from './UI/Section';
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const GoogleMap = ({latlng}) => {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  const isLoading = !latlng;

  return (
    <>
      <Section>
        <Card className="w-full md:w-[60%] mx-auto">
          <p className="mt-5 measure">Location Map</p>

          {isLoading && (
            <div className="relative py-2 inset-0 flex gap-2 items-center justify-center z-0 bg-transparent"><p className='text animate-pulse'>Loading Map</p><p className='text animate-pulse'>Enable location please!</p>
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-transparent"></div>
            </div>
          )}

          {!isLoading && (
            <AnimatePresence mode="wait">
            <motion.div
            key={latlng}
            initial={{opacity: 0, y: 20, scale: 0.98}}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
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
            </motion.div>
        </AnimatePresence>
          )}
        </Card>
      </Section>
    </>
  );
};

export default GoogleMap;
