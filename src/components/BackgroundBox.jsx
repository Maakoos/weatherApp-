import React from "react";
import styled from "styled-components";

import clearSky from "backgrounds/clearSky.jpg";

const Box = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${clearSky});
  background-size: cover;
  background-position: center;
  filter: blur(4px);
  transform: scale(1.1);

  @media (min-width: 1200px) {
    display: block;
  }
`;

const BackgroundBox = () => <Box />;

export default BackgroundBox;
