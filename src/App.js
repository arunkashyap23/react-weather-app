import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherInfoComponent";

const API_KEY = "9197964872972ff31b077b2626351601";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;

function App() {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();

  const fetchWeather = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeather(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Container>
        <AppLabel>React Weather App</AppLabel>
        {weather ? (
          <WeatherComponent weather={weather} />
        ) : (
          <CityComponent setCity={setCity} fetchWeather={fetchWeather} />
        )}
      </Container>
    </>
  );
}

export default App;
