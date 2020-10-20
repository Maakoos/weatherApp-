import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";

import errorIcon from "icons/error.svg";

const fadeInFromTop = keyframes`
  0% {
    transform: translate(-50%, -50px);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, 0);
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 125px;
  transform: translate(-50%, -50%);
  background: linear-gradient(
    133deg,
    rgba(247, 123, 33, 1) 0%,
    rgba(240, 45, 89, 1) 70%
  );
  border-radius: 10px;
  animation: ${fadeInFromTop} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const MessageComponent = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

const Icon = styled.img`
  width: 50px;
`;

const ErrorBox = ({ showErrorBox, setShowErrorBox }) => {
  const { message } = showErrorBox || {};

  const renderError = showErrorBox ? (
    <Wrapper>
      <Icon src={errorIcon} alt="" />
      <MessageComponent>{message}</MessageComponent>
      <p>try again</p>
    </Wrapper>
  ) : null;

  useEffect(() => {
    setTimeout(() => {
      setShowErrorBox(false);
    }, 2000);
  }, [showErrorBox, setShowErrorBox]);

  return <>{renderError}</>;
};

export default ErrorBox;
