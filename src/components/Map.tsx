import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Input } from "./Input";
import { GoChevronRight } from "react-icons/go";
import { DetailsCard } from "./DetailsCard";
import MapInteraction from "./MapInteraction";

export default function Map() {
  const [ipAddress, setIpAddress] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("map");
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="relative h-screen w-screen">
      <div className="absolute top-0 left-0 right-0 bg-customPurple p-6 z-[1000] rounded-b-2xl">
        <h1 className="text-5xl text-white font-bold text-center">
          IP Address Tracker
        </h1>
      </div>
      <form
        className="absolute flex items-center p-4 top-20 left-1/2 transform -translate-x-1/2 h-12 rounded-lg shadow-lg shadow-gray-200 bg-gray-50 z-[1000]"
        onSubmit={handleSubmit}
      >
        <Input
          className="bg-gray-50 focus:outline-none"
          style={{ width: "550px" }}
          type="text"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <button
          type="submit"
          className="cursor-pointer bg-transparent border-none p-0"
        >
          <GoChevronRight size={24} color="#6C5DD4" />
        </button>
      </form>
      <DetailsCard />
      <MapContainer
        center={[40.7, -74]}
        zoom={12}
        scrollWheelZoom
        className="h-full w-full z-0"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        <MapInteraction />
      </MapContainer>
    </div>
  );
}
