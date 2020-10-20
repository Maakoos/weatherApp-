import React, { useState } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import axios from "axios";

import GlobalStyle from "styles/GlobalStyle";
import AppContext from "context/AppContext";

import LoadingBox from "components/LoadingBox";
import BackgroundBox from "components/BackgroundBox";
import ErrorBox from "components/ErrorBox";

import MainView from "views/MainView";
import DetailsView from "views/DetailsView";

const API_KEY = "e744ebd5ae54e2794ead64664fa6dd71";

function App() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const [currentWeather, setCurrentWeather] = useState({});
  const [futureWeather, setFutureWeather] = useState({});

  const [showLoader, setShowLoader] = useState(false);
  const [showErrorBox, setShowErrorBox] = useState(null);

  const fetchData = async (city) => {
    setShowLoader(true);

    let response = null;
    try {
      response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${API_KEY}&lang=en`
      );
      setCurrentWeather(response.data);
    } catch (err) {
      if (err.response.status === 404) {
        setTimeout(() => {
          setShowErrorBox(err.response.data);
        }, 2000);
        setFutureWeather({});
        setCurrentWeather({});
        return;
      } else if (err.response.status === 500) {
        setTimeout(() => {
          setShowErrorBox(err.response.data);
        }, 2000);
      }
    }

    const coords = response?.data?.coord;

    const { lon, lat } = coords || {};

    const futureDaysData = await axios(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&appid=${API_KEY}&units=metric&lang=en`
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
    showErrorBox,
    setShowErrorBox,
  };

  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <BackgroundBox />
      <div className="App">
        {showLoader ? <LoadingBox showLoader={showLoader} /> : null}
        <ErrorBox
          showErrorBox={showErrorBox}
          setShowErrorBox={setShowErrorBox}
        />
        <GlobalStyle />
        <AppContext.Provider value={contextValue}>
          <Switch>
            <Route path="/" component={MainView} exact />
            <Route path="/details" component={DetailsView} />
          </Switch>
        </AppContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
