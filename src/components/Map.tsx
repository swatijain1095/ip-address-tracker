import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Input } from "./Input";
import { GoChevronRight } from "react-icons/go";
import { DetailsCard } from "./DetailsCard";
import { getGeoLocation } from "../api";
import { Geolocation } from "../type";

export default function Map() {
  const [ipAddress, setIpAddress] = useState("");
  const [error, setError] = useState("");
  const [geoData, setGeoData] = useState<Geolocation | null>(null);
  const [position, setPosition] = useState<[number, number]>([40.7, -74]);

  const validateInputIP = (ip: string): boolean => {
    const ipRegex =
      /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9x][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipRegex.test(ip);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateInputIP(ipAddress)) {
      setError("Please enter a valid IP address.");
      return;
    }

    setError("");

    try {
      const data = await getGeoLocation({ ip: ipAddress });
      if (!data) {
        setError("Failed to fetch geo location");
        return;
      }
      setGeoData(data);
      setPosition([data.location.lat, data.location.lng]);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  const MapRecenter = ({ position }: { position: [number, number] }) => {
    const map = useMap();

    useEffect(() => {
      map.setView(position, map.getZoom());
    }, [position, map]);

    return null;
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
        id="ip-form"
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

      {error && (
        <p className="absolute top-32 left-1/2 transform -translate-x-1/2 font-bold text-red-500 bg-gray-100 px-1 py-1 rounded z-[1000]">
          {error}
        </p>
      )}

      {geoData && (
        <DetailsCard
          ip={geoData.ip}
          location={`${geoData.location.city}, ${geoData.location.region} ${geoData.location.postalCode}`}
          timeZone={geoData.location.timezone}
          isp={geoData.isp}
        />
      )}
      <MapContainer
        center={position}
        zoom={12}
        scrollWheelZoom={false}
        className="h-full w-full z-0"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        <Marker position={position}>
          <Popup>
            {geoData?.location?.city}, {geoData?.location?.region},{" "}
            {geoData?.location?.country}
          </Popup>
        </Marker>
        <MapRecenter position={position} />
      </MapContainer>
    </div>
  );
}
