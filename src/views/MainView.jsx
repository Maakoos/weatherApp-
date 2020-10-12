import React from "react";
import styled from "styled-components";

import Header from "components/Header";
import CurrentBox from "components/CurrentTemp";
import FutureTemperatures from "components/FutureTemperatures";

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const MainView = () => (
  <Wrapper>
    <Header />
    <CurrentBox />
    <FutureTemperatures />
  </Wrapper>
);

export default MainView;
