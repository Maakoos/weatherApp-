import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "context/AppContext";

import DescriptionWeather from "components/DescriptionWeather";

const Wrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 0 30px;
  max-width: 400px;
`;

const TempBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CurrentTemp = styled.h1`
  display: flex;
  font-size: 120px;
  font-weight: 300;
  line-height: 1;
`;

const Sup = styled.sup`
  font-size: 40px;
  line-height: 1.3;
`;

const MinMaxTempBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 20px;
`;

const MaxTemp = styled.p`
  padding-bottom: 5px;
  font-size: 25px;
  font-weight: 300;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

const MinTemp = styled(MaxTemp)`
  padding: 0;
  padding-top: 5px;
  border-bottom: none;
`;

const SmallSup = styled.sup`
  margin-right: 3px;
  margin-left: 2px;
  font-size: 15px;
`;

const CurrentBox = () => {
  const context = useContext(AppContext);
  const { daily } = context;

  const { temp, weather } = daily ? daily[0] : {};
  const { day, night, max } = temp || {};

  const currentTemp = Math.ceil(day);
  const maxTemp = Math.ceil(max);
  const nightTemp = Math.ceil(night);

  const showComponentsWithData = currentTemp ? (
    <>
      {" "}
      <DescriptionWeather weather={weather} />
      <TempBox>
        <CurrentTemp>
          {currentTemp}
          <Sup>o</Sup>
        </CurrentTemp>
        <MinMaxTempBox>
          <MaxTemp>
            {maxTemp}
            <SmallSup>o</SmallSup>C
          </MaxTemp>
          <MinTemp>
            {nightTemp}
            <SmallSup>o</SmallSup>C
          </MinTemp>
        </MinMaxTempBox>
      </TempBox>
    </>
  ) : null;

  return <Wrapper>{showComponentsWithData}</Wrapper>;
};

export default CurrentBox;
