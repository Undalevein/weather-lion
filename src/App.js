import { useState, useEffect } from "react";
import "./styles.css";
import Header from "./Header";
import Photo from "./Photo";
import CurrentInfo from "./CurrentInfo";
import FutureInfo from "./FutureInfo";
import Footer from "./Footer";
import Input from "./Input";

export default function App() {
  const [latitude, setLatitdue] = useState("33.97051200570723");
  const [longitude, setLongitude] = useState("-118.41661331438239");
  const [location, setLocation] = useState("Marina del Ray");
  const [error, setError] = useState("");
  const [dataWeather, setDataWeather] = useState({});

  useEffect(() => {
    console.log("Fetching");
    console.log("latitude:", latitude, "longitude", longitude);
    const urlCoords = `https://api.weather.gov/points/${latitude},${longitude}`;
    fetch(urlCoords)
      .then((r) => r.json())
      .then((r) => {
        if (r?.properties?.relativeLocation?.properties?.city) {
          setLocation(r?.properties?.relativeLocation?.properties?.city);
        }
        if (r?.properties?.forecast) {
          fetch(r?.properties.forecast)
            .then((r) => r.json())
            .then((r) => setDataWeather(r))
            .catch((e) => setDataWeather(`${e}`));
        }
      })
      .catch((e) => setError(`${e}`));
    if (error) {
      console.log("Error", error);
    }
  }, [latitude, longitude]);

  return (
    <div className="App">
      <Header name="Weather Lion" path="../img/LMU_Logo.png" />
      <main id="topBody">
        <Photo id="lawn" path="../img/LMU_SunkenGardens.jpg" />
        <CurrentInfo data={dataWeather} location={location} />
      </main>
      <Input setLatitude={setLatitdue} setLongitude={setLongitude} />
      <FutureInfo data={dataWeather} />
      <Footer name="Made by Wesley Ng '26, 2024" />
    </div>
  );
}
