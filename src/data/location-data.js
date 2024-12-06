const data = [
  {
    location: "London",
    latitude: 51.5,
    longitude: -0.12,
  },
  {
    location: "Kolkata",
    latitude: 22.57,
    longitude: 88.36,
  },
  {
    location: "Dhaka",
    latitude: 23.8041,
    longitude: 90.4152,
  },
  {
    location: "Singapore",
    latitude: 1.28,
    longitude: 103.85,
  },
  {
    location: "New York",
    latitude: 40.71,
    longitude: -74.0,
  },
  {
    location: "Toronto",
    latitude: 43.65,
    longitude: -79.38,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  const filtered = data.filter((item) => item.location === location);

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
