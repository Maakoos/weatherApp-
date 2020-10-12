import React, { useContext, useState, useRef, useEffect } from "react";
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
  background-color: transparent;
  border: none;
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

  const context = useContext(AppContext);

  const searchInputRef = useRef();

  const { name, searchInputValue, setSearchInputValue, fetchData } = context;

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
  };

  const handleOnClick = () => {
    setSearchInputIsVisible((prevValue) => !prevValue);
  };

  useEffect(() => {
    searchInputRef.current.focus();
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
      <Button>
        <img src={more} alt="" />
      </Button>
      <CityBox>
        <CityName>{name}</CityName>
        <Date>{currentDate}</Date>
      </CityBox>
      <Button onClick={handleOnClick}>
        <img src={add} alt="" />
      </Button>
    </Wrapper>
  );
};

export default Header;
