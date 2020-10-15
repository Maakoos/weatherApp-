import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";

import AppContext from "context/AppContext";

import undoIcon from "icons/undo.svg";

import DetailsList from "components/DetailsList";
import NextDaysWeather from "components/NextDaysWeather";

const fadeIn = keyframes`
   0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const Wrapper = styled.main`
  opacity: 0;

  ${({ showLoader }) =>
    showLoader &&
    css`
      animation: ${fadeIn} 1s ease-out both;
    `}
`;

const GoBack = styled.button`
  width: 50px;
  height: 50px;
  background: url(${undoIcon});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
`;

const DetailsView = () => {
  const { current, showLoader, setShowLoader } = useContext(AppContext);

  const history = useHistory();

  const handleOnClick = () => history.goBack();

  useEffect(() => {
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
    }, 1000);
  }, [setShowLoader]);

  return (
    <Wrapper showLoader={!showLoader}>
      <GoBack onClick={handleOnClick}></GoBack>
      <DetailsList {...current} />
      <NextDaysWeather />
    </Wrapper>
  );
};

export default DetailsView;
