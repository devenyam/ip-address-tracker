/* eslint-disable react/prop-types */
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useContext } from 'react';
import { MapContext } from '../App';

import 'leaflet/dist/leaflet.css';
import styles from './Map.module.css';
import L from 'leaflet';

const icon = new L.Icon({
  iconUrl: '/images/icon-location.svg',
  iconSize: [38, 50],
});

export default function Map() {
  const {coords, initData} = useContext(MapContext)
  const position = coords;

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={position}
        zoom={12}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup>
           You are here <br/> {initData.location?.city}
          </Popup>
        </Marker>

        <ChangeCenter position={position} />
      </MapContainer>
    </div>
  );
}

function ChangeCenter({ position }) {
  const map = useMap();
  map.setView(position);
  return null;
}
