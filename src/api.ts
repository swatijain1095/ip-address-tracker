import { Geolocation } from "./type";

const apiKey = import.meta.env.VITE_API_KEY;

export const getGeoLocation = async ({
  ip,
}: {
  ip: string;
}): Promise<Geolocation> => {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch geo location");
  }

  const data = await response.json();

  const geoLocationData: Geolocation = {
    ip: data.ip,
    location: {
      country: data.location.country,
      region: data.location.region,
      city: data.location.city,
      lat: data.location.lat,
      lng: data.location.lng,
      postalCode: data.location.postalCode || "",
      timezone: data.location.timezone,
      geonameId: data.location.geonameId,
    },
    isp: data.isp,
    domains: data.domains || [],
    as: data.as
      ? {
          asn: data.as.asn,
          name: data.as.name,
          route: data.as.route,
          domain: data.as.domain || "",
          type: data.as.type || "",
        }
      : undefined,
  };

  return geoLocationData;
};
