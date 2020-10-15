import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "context/AppContext";

import BoxForHourTemperature from "components/BoxForHourTemperature";

const Wrapper = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const FutureTemperatures = () => {
  const { hourly } = useContext(AppContext);

  const tempNow = hourly?.slice(0, 1);
  const nextFiveHours = hourly?.slice(1, 6);

  return (
    <Wrapper>
      {tempNow?.map((temp) => (
        <BoxForHourTemperature key={temp.dt} {...temp} now />
      ))}
      {nextFiveHours?.map((hour) => (
        <BoxForHourTemperature key={hour.dt} {...hour} />
      ))}
    </Wrapper>
  );
};

export default FutureTemperatures;
