import React from "react";
import { Map, Marker, Tooltip, TileLayer, Polyline } from "react-leaflet";
import { Icon } from "leaflet";
import avion from "./img/paper-plane2.svg";
//import * as parkData from "./data/skateboard-parks.json";
import "./App.css";
//import Planes from "./Planes"
//<Polyline pathOptions={{color:'#eb42dd', weight:5}} positions={flights} />

export const icon = new Icon({
  iconUrl: avion,
  iconSize: [35, 35]
});

export default function MapaMundi({flights, position}) {

  return (
    <Map center={[-35.6, -71.54]} zoom={4}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {position.map(position => 
        <Marker position={position.position} icon={icon}>
          <Tooltip>
            {position.code}<br /> Lat: {position.position[0]} <br /> Long: {position.position[1]}
          </Tooltip>
        </Marker>
      )};
      {flights.map(flights => 
        <Polyline positions={[flights.origin, flights.destination]}
        />
      )}
      
    </Map>
  );
}
