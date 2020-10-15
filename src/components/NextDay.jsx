import React from "react";
import styled from "styled-components";

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NameOfDay = styled.p`
  font-size: 16px;
`;

const Icon = styled.img`
  width: 35px;

  @media (min-width: 1200px) {
    width: 60px;
  }
`;

const MaxTemp = styled.p`
  padding-bottom: 5px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
`;

const MinTemp = styled(MaxTemp)`
  padding: 0;
  padding-top: 5px;
  color: rgba(255, 255, 255, 0.6);
  border: none;
`;

const NextDay = ({ dt, temp: { day, night }, weather }) => {
  const options = {
    weekday: "short",
  };
  const dayName = new window.Date(dt * 1000).toLocaleDateString(
    "en-GB",
    options
  );

  const dayTemp = Math.ceil(day);
  const nightTemp = Math.ceil(night);
  const weatherIcon = weather[0].icon;

  return (
    <Wrapper>
      <NameOfDay>{dayName}</NameOfDay>
      <Icon
        src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt=""
      />
      <div>
        <MaxTemp>
          {dayTemp}
          <sup>o</sup>
        </MaxTemp>
        <MinTemp>
          {nightTemp}
          <sup>o</sup>
        </MinTemp>
      </div>
    </Wrapper>
  );
};

export default NextDay;
