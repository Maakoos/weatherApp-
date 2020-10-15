import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "context/AppContext";

import SectionHeading from "components/SectionHeading";
import NextDay from "components/NextDay";

const Wrapper = styled.section`
  margin-top: 30px;
`;

const NextDaysList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

const NextDaysWeather = () => {
  const { daily } = useContext(AppContext);

  const nextSevenDays = daily?.slice(1);

  return (
    <Wrapper>
      <SectionHeading>Next 7 days</SectionHeading>
      <NextDaysList>
        {nextSevenDays?.map((day) => (
          <NextDay key={day.dt} {...day} />
        ))}
      </NextDaysList>
    </Wrapper>
  );
};

export default NextDaysWeather;
