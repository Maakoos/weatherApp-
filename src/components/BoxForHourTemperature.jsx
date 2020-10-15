import React from "react";
import styled from "styled-components";

const TempBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
`;

const Icon = styled.img`
  margin: 5px 0;
  width: 35px;

  @media (min-width: 1200px) {
    width: 60px;
  }
`;

const Sup = styled.sup`
  margin-left: 2px;
`;

const BoxForHourTemperature = ({ dt, temp, weather, now }) => {
  const hourValue = new window.Date(dt * 1000).toLocaleTimeString("pl-PL", {
    hour: "numeric",
    minute: "numeric",
  });

  const { icon } = weather[0];

  const temperature = Math.ceil(temp);

  return (
    <TempBox>
      <p>
        {temperature}
        <Sup>o</Sup>
      </p>
      <Icon src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
      <p>{now ? "NOW" : hourValue}</p>
    </TempBox>
  );
};

export default BoxForHourTemperature;
