import React, { useContext, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import AppContext from "context/AppContext";

import add from "icons/add.svg";
import more from "icons/more.svg";

const Wrapper = styled.header`
  position: relative;
  display: flex;
`;

const CityBox = styled.div`
  flex-grow: 1;
  text-align: center;
`;

const CityName = styled.p`
  font-size: 25px;
  font-weight: 300;
`;

const Date = styled.p`
  font-size: 13px;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
`;

const MoreBtn = styled(Button)`
  background: url(${more});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const SearchBtn = styled(Button)`
  background: url(${add});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Form = styled.form`
  display: none;
  position: absolute;
  top: 0px;
  right: 55px;
  width: calc(100% - 110px);
  background-color: #51a4db;

  ${({ searchInputIsVisible }) =>
    searchInputIsVisible &&
    css`
      display: block;
    `}
`;

const SearchInput = styled.input`
  width: 100%;
  background-color: transparent;
  text-align: center;
  color: #fff;
  font-size: 25px;
  font-family: inherit;
  border: none;

  &::placeholder {
    color: #fff;
  }
`;

const Header = () => {
  const [searchInputIsVisible, setSearchInputIsVisible] = useState(false);

  const {
    name,
    searchInputValue,
    setSearchInputValue,
    fetchData,
    setShowLoader,
  } = useContext(AppContext);

  const searchInputRef = useRef();

  const options = {
    weekday: "short",
    month: "short",
    year: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const currentDate = new window.Date().toLocaleDateString("pl-PL", options);

  const handleOnChange = (e) => setSearchInputValue(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    fetchData(searchInputValue);
    setSearchInputIsVisible(false);
    setSearchInputValue("");
    setTimeout(() => setShowLoader(false), 2000);
  };

  const handleOnClick = () =>
    setSearchInputIsVisible((prevValue) => !prevValue);

  const closeInputOnBlurEvent = () => {
    setSearchInputIsVisible(false);
    setSearchInputValue("");
  };

  useEffect(() => {
    const inputRefCopy = searchInputRef.current;

    inputRefCopy.focus();
    inputRefCopy.addEventListener("blur", closeInputOnBlurEvent);

    return () =>
      inputRefCopy.removeEventListener("blur", closeInputOnBlurEvent);
  });

  return (
    <Wrapper>
      <Form
        onSubmit={handleOnSubmit}
        searchInputIsVisible={searchInputIsVisible}
      >
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchInputValue}
          onChange={handleOnChange}
          ref={searchInputRef}
        />
      </Form>
      <MoreBtn as={Link} to="/details" />
      <CityBox>
        <CityName>{name}</CityName>
        <Date>{currentDate}</Date>
      </CityBox>
      <SearchBtn onClick={handleOnClick} />
    </Wrapper>
  );
};

export default Header;
