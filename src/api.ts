const apiKey = import.meta.env.GEOLOCATION_API_KEY;
type GeoLocationProps = {
  ip: string;
};
export const getGeoLocation = async ({ ip }: GeoLocationProps) => {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch geo location");
  }

  const data = await response.json();
  return data;
};
