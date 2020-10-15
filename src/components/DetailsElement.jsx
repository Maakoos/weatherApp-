import React from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
`;

const Icon = styled.img`
  margin-bottom: 3px;
  width: 30px;

  ${({ windDeg }) =>
    windDeg &&
    css`
      margin: 0;
      width: 30px;
      transform: rotate(${windDeg}deg);
    `}
`;

const DetailName = styled.p`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
`;

const DetailsElement = ({
  detailName,
  detailValue,
  icon,
  unit,
  windDirectionIcon,
}) => {
  const renderGoodUnit = unit === "oC" ? <sup>o</sup> : unit;

  const renderWithoutFetchData = detailValue ? (
    <p>
      {detailValue} {renderGoodUnit}
    </p>
  ) : (
    "N/A"
  );

  const renderWindDirection = detailValue ? (
    <Icon src={windDirectionIcon} alt="" windDeg={detailValue} />
  ) : (
    "N/A"
  );

  const renderDetailValue =
    detailName !== "wind deg" ? (
      <>{renderWithoutFetchData}</>
    ) : (
      <>{renderWindDirection}</>
    );

  return (
    <Wrapper>
      <Icon src={icon} alt="" />
      <DetailName>{detailName}</DetailName>
      {renderDetailValue}
    </Wrapper>
  );
};

export default DetailsElement;
