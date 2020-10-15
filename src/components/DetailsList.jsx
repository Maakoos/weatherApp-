import React from "react";
import styled from "styled-components";

import humidityIcon from "icons/humidity.svg";
import moonIcon from "icons/moon.svg";
import pressureIcon from "icons/pressure.svg";
import sunIcon from "icons/sun.svg";
import thermometerIcon from "icons/thermometer.svg";
import visibilityIcon from "icons/visibility.svg";
import windIcon from "icons/wind.svg";
import windSpeedIcon from "icons/wind_speed.svg";
import arrowUpIcon from "icons/arrow.svg";

import SectionHeading from "components/SectionHeading";
import DetailsElement from "components/DetailsElement";

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

const DetailsList = ({
  dew_point,
  feels_like,
  humidity,
  pressure,
  sunrise,
  sunset,
  visibility,
  wind_deg,
  wind_speed,
}) => {
  const options = {
    hour: "numeric",
    minute: "numeric",
  };
  const sunriseTime = new window.Date(sunrise * 1000).toLocaleTimeString(
    "pl-PL",
    options
  );

  const sunsetTime = new window.Date(sunset * 1000).toLocaleTimeString(
    "pl-PL",
    options
  );

  const detailsArray = [
    {
      detailName: "dew point",
      detailValue: Math.ceil(dew_point),
      unit: "oC",
      icon: thermometerIcon,
    },
    {
      detailName: "feels like",
      detailValue: Math.ceil(feels_like),
      unit: "oC",
      icon: thermometerIcon,
    },
    {
      detailName: "humidity",
      detailValue: humidity,
      unit: "%",
      icon: humidityIcon,
    },
    {
      detailName: "pressure",
      detailValue: pressure,
      unit: "hPa",
      icon: pressureIcon,
    },
    {
      detailName: "sunrise",
      detailValue: sunriseTime,
      unit: "",
      icon: sunIcon,
    },
    {
      detailName: "sunset",
      detailValue: sunsetTime,
      unit: "",
      icon: moonIcon,
    },
    {
      detailName: "visibility",
      detailValue: visibility,
      unit: "m",
      icon: visibilityIcon,
    },
    {
      detailName: "wind deg",
      detailValue: wind_deg,
      unit: "",
      icon: windSpeedIcon,
      windDirectionIcon: arrowUpIcon,
    },
    {
      detailName: "wind speed",
      detailValue: wind_speed,
      unit: "m/s ",
      icon: windIcon,
    },
  ];

  return (
    <section>
      <SectionHeading>Details</SectionHeading>
      <List>
        {detailsArray.map((detail) => (
          <DetailsElement key={detail.detailName} {...detail} />
        ))}
      </List>
    </section>
  );
};

export default DetailsList;
