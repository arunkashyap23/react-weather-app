import styled from "styled-components";
import React from "react";
import pi from "../icons/perfect-day.svg";

const WeatherLogo = styled.img`
  width: 140px;
  height: 140px;
  margin: 40px auto;
`;

const ChooseCityLabel = styled.span`
  color: black;
  margin: 10px auto;
  font-size: 18px;
  font-weight: bold;
`;

const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
  border: black solid 1px;
  border-radius: 2px;
  & input {
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
  }
  & button {
    background-color: black;
    font-size: 14px;
    padding: 0 10px;
    color: white;
    border: none;
    outline: none;
    cursor: pointer;
    font-weight: bold;
  }
`;

const CityComponent = ({ setCity, fetchWeather }) => {
  return (
    <>
      <WeatherLogo src={pi} />
      <ChooseCityLabel>Find Weather of your City</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input placeholder="City" onChange={(e) => setCity(e.target.value)} />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default CityComponent;