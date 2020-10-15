import React from "react";
import styled from "styled-components";

const Heading = styled.h2`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;

  &::after {
    content: "";
    flex-grow: 1;
    display: block;
    margin-left: 15px;
    min-width: 50%;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.5);
  }
`;

const SectionHeading = ({ children }) => <Heading>{children}</Heading>;

export default SectionHeading;
