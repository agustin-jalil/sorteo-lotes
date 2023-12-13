import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const LotesIdMapa = () => {
  const position = [-28.468964, -65.779018];

  const mapStyle = {
    height: '100%',
    width: '100%',
    borderRadius: '10px',
    overflow: 'hidden', // Ensure no overflow interferes with border radius
  };

  return (
    <div style={{ height: '100%', borderRadius: '10px', overflow: 'hidden' }}>
      {/* Apply border radius and overflow on a parent container */}
      <MapContainer center={position} zoom={18} style={mapStyle} zoomControl={false}>
        {/* Disable default zoom control */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="Map data &copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>
            A sample marker popup.
          </Popup>
        </Marker>
        {/* Custom Zoom Control */}
        <ZoomControl position="bottomleft" />
        {/* Position can be 'topleft', 'topright', 'bottomleft', 'bottomright' */}
      </MapContainer>
    </div>
  );
};

export default LotesIdMapa;
