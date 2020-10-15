import React from "react";
import styled, { css, keyframes } from "styled-components";

const bounce = keyframes`
  to {
    opacity: 0.3;
    transform: translate3d(0, -16px, 0);
  }
`;

const fadeOut = keyframes`
   0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(81, 164, 219, 1) 0%,
    rgba(115, 186, 225, 1) 100%
  );

  ${({ showLoader }) =>
    showLoader &&
    css`
      animation: ${fadeOut} 1s 1s ease-out both;
    `}
`;

const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  margin: 2rem 0.3rem;
  background: #fff;
  border-radius: 50%;
  animation: 0.9s ${bounce} infinite alternate;

  &:nth-child(2) {
    animation-delay: 0.3s;
  }

  &:nth-child(3) {
    animation-delay: 0.6s;
  }
`;

const LoadingBox = ({ showLoader }) => {
  return (
    <Wrapper showLoader={showLoader}>
      <Circle />
      <Circle />
      <Circle />
    </Wrapper>
  );
};

export default LoadingBox;
