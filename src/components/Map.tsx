import "leaflet/dist/leaflet.css";
import type { Map as LeafletMap } from "leaflet";
import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Input } from "./Input";
import { GoChevronRight } from "react-icons/go";
import { DetailsCard } from "./DetailsCard";

export default function Map() {
  const mapRef = useRef<LeafletMap | null>(null);

  return (
    <div className="relative h-screen w-screen">
      <div className="absolute top-0 left-0 right-0 bg-customPurple p-6 z-[1000] rounded-b-2xl">
        <h1 className="text-5xl text-white font-bold text-center">
          IP Address Tracker
        </h1>
      </div>
      <div className="absolute flex items-center p-4 top-20 left-1/2 transform -translate-x-1/2 h-12 rounded-lg shadow-lg shadow-gray-200 bg-gray-50 z-[1000]">
        <Input
          className="bg-gray-50 focus:outline-none"
          style={{ width: "550px" }}
          type="text"
        />
        <GoChevronRight size={24} color="#6C5DD4" />
      </div>
      <DetailsCard />
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
