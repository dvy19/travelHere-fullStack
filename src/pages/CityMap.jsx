import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Fix for default Leaflet marker icons not displaying properly in React/Webpack builds
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
});

const CityMap = ({ latitude, longitude, cityName }) => {
  // Ensure coordinates exist and are valid numbers
  const lat = parseFloat(latitude);
  const lng = parseFloat(longitude);

  if (isNaN(lat) || isNaN(lng)) {
    return <div className="text-gray-500">Map coordinates unavailable.</div>;
  }

  const cityCenter = [lat, lng];

  return (
    <div className="w-full h-80 rounded-lg overflow-hidden shadow-md z-0">
      <MapContainer
        center={cityCenter}
        zoom={20}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        {/* OpenStreetMap Tile Layer (Free, no API key needed) */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Main City Marker */}
        <Marker position={cityCenter}>
          <Popup>
            <span className="font-bold">{cityName}</span>
          </Popup>
        </Marker>

        

          
      </MapContainer>
    </div>
  );
};

export default CityMap;