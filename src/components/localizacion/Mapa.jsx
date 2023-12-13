import { MapContainer, TileLayer, Marker, Popup, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = () => {
  const position =  [-28.468964, -65.779018];
  return (
    <div style={{ height: '88.7vh', width: '100%' }}>
      <MapContainer center={position} zoom={13}style={{ height: '100%' }} zoomControl={false}>
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

export default Mapa;
