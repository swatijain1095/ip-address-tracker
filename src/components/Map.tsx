import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap } from "leaflet";
import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

export default function Map() {
  const mapRef = useRef<LeafletMap | null>(null);

  return (
    <div className="relative h-screen w-screen">
      <h1 className="absolute top-5 left-1/2 transform -translate-x-1/2 text-5xl font-bold z-[1000]">
        IP Address Tracker
      </h1>
      <MapContainer
        ref={mapRef}
        center={[40.7, -74]}
        zoom={12}
        scrollWheelZoom
        className="h-full w-full z-0"
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
      </MapContainer>
    </div>
  );
}
