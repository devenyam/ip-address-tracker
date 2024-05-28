import { createContext, useEffect, useState } from "react";

import AppLayout from "./components/AppLayout";
import PictureBackground from "./components/PictureBackground";
import Tracker from "./components/Tracker";
import Map from "./components/Map";
import Card from "./components/Card";
import Header from "./components/Header";
import Input from "./components/Input";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;

export const SearchContext = createContext(null);
export const MapContext = createContext(null);

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [coords, setCoords] = useState([0, 0]);
  const [initData, setInitData] = useState({});

  function handleSetSearchQuery(e) {
    setSearchQuery(e.target.value);
  }

  async function handleSearchQuery() {
    try {
      const res = await fetch(`${BASE_URL}&ipAddress=${searchQuery}`);
      if (!res.ok) throw new Error("Couldn't get your IP Address or domain");

      const data = await res.json();
      setInitData({
        location: {
          city: data?.location.city,
          country: data?.location.country,
        },
        ip: data?.ip,
        isp: data?.isp,
        timezone: data?.location.timezone,
      });
      setCoords([data.location.lat, data.location.lng]);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    async function trackOnMount() {
      try {
        const res = await fetch(BASE_URL);
        if (!res.ok) throw new Error("Couldn't get your IP Address or domain");
        const data = await res.json();
        setInitData({
          location: {
            city: data?.location.city,
            country: data?.location.country,
          },
          ip: data?.ip,
          isp: data?.isp,
          timezone: data?.location.timezone,
        });
      } catch (err) {
        console.log(err.message);
      }
    }

    trackOnMount();
  }, []);

  useEffect(() => {
    async function mountMap() {
      try {
        if (!navigator.geolocation)
          throw new Error("Your browser does not support Geolocation");

        navigator.geolocation.getCurrentPosition(
          async (pos) => {
            const { latitude: lat } = pos.coords;
            const { longitude: lng } = pos.coords;
            setCoords([lat, lng]);
          },
          async () => {
            throw new Error("Couldn't get your location");
          }
        );
      } catch (err) {
        console.log(err.message);
      }
    }

    mountMap();
  }, []);

  return (
    <SearchContext.Provider
      value={{ searchQuery, handleSearchQuery, handleSetSearchQuery }}
    >
      <MapContext.Provider value={{ coords, initData }}>
        <AppLayout>
          <PictureBackground />
          <Tracker>
            <Header header="IP Address Tracker" />
            <Input />
            <Card />
          </Tracker>
          <Map />
        </AppLayout>
      </MapContext.Provider>
    </SearchContext.Provider>
  );
}

export default App;
