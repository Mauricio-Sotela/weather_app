import React, { useState, useEffect } from "react";
import "./css/App.css";
import axios from "axios";

import Nav from "./components/Nav";
import TemperatureCard from "./components/Temperature_card";
// 21885d08c8d573206b3223b5fa6f08fa
// bb037310921af67f24ba53f2bad48b1d
const API = {
  API_KEY: "bb037310921af67f24ba53f2bad48b1d",
  API_BASE: `https://api.openweathermap.org/data/2.5/weather?q=`,
};

function App() {
  const [city, setCity] = useState("Berlin");
  const [weather, setWeather] = useState({});

  function getTemperature(city) {
    axios
      .get(`${API.API_BASE}${city}&units=metric&APPID=${API.API_KEY}`)
      .then((res) => {
        setWeather(res.data);
        setCity("");
      });
  }
 
  const onClickHandler = () => {
    getTemperature(city);

  };
  const keyPress = (e) => {
    if (e.keyCode === 13) {
      onClickHandler();
    }
  };

  const onChangeHandler = (e) => {
    setCity(e.target.value);
  };

useEffect(() => {
  getTemperature(city)
}, [])



  return (
    <div className="main__container">
      <Nav
        state={city}
        onChangeHandler={onChangeHandler}
        keyPress={keyPress}
        onClickHandler={onClickHandler}
      />
      <TemperatureCard data={weather} />
    </div>
  );
}

export default App;
