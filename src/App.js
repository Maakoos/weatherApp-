import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import GlobalStyle from "styles/GlobalStyle";
import AppContext from "context/AppContext";

import LoadingBox from "components/LoadingBox";
import BackgroundBox from "components/BackgroundBox";

import MainView from "views/MainView";
import DetailsView from "views/DetailsView";

const API_KEY = "e744ebd5ae54e2794ead64664fa6dd71";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [futureWeather, setFutureWeather] = useState({});

  const [showLoader, setShowLoader] = useState(false);

  const fetchData = async (city) => {
    setShowLoader(true);
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
    setTimeout(() => setShowLoader(false), 2000);
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
    showLoader,
    setShowLoader,
  };

  return (
    <Router>
      <BackgroundBox />
      <div className="App">
        {showLoader ? <LoadingBox showLoader={showLoader} /> : null}
        <GlobalStyle />
        <AppContext.Provider value={contextValue}>
          <Switch>
            <Route path="/" component={MainView} exact />
            <Route path="/details" component={DetailsView} />
          </Switch>
        </AppContext.Provider>
      </div>
    </Router>
  );
}

export default App;
