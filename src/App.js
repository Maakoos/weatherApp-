import React, { useState, useEffect } from "react";
import axios from "axios";

import GlobalStyle from "styles/GlobalStyle";
import AppContext from "context/AppContext";

import MainView from "views/MainView";

const API_KEY = "e744ebd5ae54e2794ead64664fa6dd71";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [futureWeather, setFutureWeather] = useState({});

  const fetchData = async (city) => {
    const response = await axios(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}&lang=pl`
    );

    setCurrentWeather(response.data);

    const coords = response.data.coord;

    const { lon, lat } = coords;

    const futureDaysData = await axios(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}&units=metric&lang=pl`
    );

    setFutureWeather(futureDaysData.data);
  };

  const { main, name } = currentWeather;
  const { current, daily, hourly } = futureWeather;

  const contextValue = {
    main,
    name,
    current,
    daily,
    hourly,
    searchInputValue,
    setSearchInputValue,
    fetchData,
  };

  useEffect(() => {
    console.log("effect");
    fetchData("londyn");
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <AppContext.Provider value={contextValue}>
        <MainView />
      </AppContext.Provider>
    </div>
  );
}

export default App;
