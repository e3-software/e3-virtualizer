import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

const GMaps = () => {
  const position = { lat: 36.005771, lng: -86.631136 };

  console.log(apiKey);
  return (
    <APIProvider apiKey={apiKey}>
      <Map defaultCenter={position} defaultZoom={10}>
        <Marker position={position} />
      </Map>
    </APIProvider>
  );
};

export default GMaps;
