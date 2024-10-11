import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap } from "leaflet";
import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Input } from "./Input";

export default function Map() {
  const mapRef = useRef<LeafletMap | null>(null);

  return (
    <div className="relative h-screen w-screen">
      <div className="absolute top-0 left-0 right-0 bg-customPurple p-10 z-[1000]">
        <h1 className="text-5xl text-white font-bold text-center">
          IP Address Tracker
        </h1>
      </div>
      <Input
        className="absolute p-2 top-28 left-1/2 transform -translate-x-1/2 h-12 rounded-lg shadow-lg shadow-gray-200 bg-gray-50 z-[1000] focus:outline-none"
        style={{ width: "450px" }}
      />
      <MapContainer
        ref={mapRef}
        center={[40.7, -74]}
        zoom={12}
        scrollWheelZoom
        className="h-full w-full z-0"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
      </MapContainer>
    </div>
  );
}
