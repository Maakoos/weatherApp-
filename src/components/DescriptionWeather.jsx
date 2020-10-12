import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Description = styled.p`
  margin-left: 10px;
  font-size: 22px;
  font-weight: 300;
`;

const DescriptionWeather = ({ weather }) => {
  const { description, icon } = weather[0];

  return (
    <Wrapper>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <Description>{description}</Description>
    </Wrapper>
  );
};

export default DescriptionWeather;
