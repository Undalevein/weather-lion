import { useState, useEffect } from "react";
import "./styles.css";
import Header from "./Header";
import Photo from "./Photo";
import CurrentInfo from "./CurrentInfo";
import FutureInfo from "./FutureInfo";
import Footer from "./Footer";

export default function App() {
  const latitude = "33.97051200570723";
  const longitude = "-118.41661331438239";
  const [dataCoords, setDataCoords] = useState({});
  const [dataWeather, setDataWeather] = useState({});

  useEffect(() => {
    const urlCoords = `https://api.weather.gov/points/${latitude},${longitude}`;
    fetch(urlCoords)
      .then((r) => r.json())
      .then((r) => {
        setDataCoords(r);
        if (r?.properties?.forecast) {
          fetch(r?.properties.forecast)
            .then((r) => r.json())
            .then((r) => setDataWeather(r))
            .catch((e) => setDataWeather(`${e}`));
        }
      })
      .catch((e) => setDataCoords(`${e}`));
  }, []);

  return (
    <div className="App">
      <Header name="Weather Lion" path="../img/LMU_Logo.png" />
      <main id="topBody">
        <Photo id="lawn" path="../img/LMU_SunkenGardens.jpg" />
        <CurrentInfo data={dataWeather} />
      </main>
      <FutureInfo data={dataWeather} />
      <Footer name="Made by Wesley Ng '26, 2024" />
    </div>
  );
}
