import { useMap } from "react-leaflet";

export default function MapInteraction() {
  const map = useMap();
  console.log("Map instance:", map);
  return null;
}
