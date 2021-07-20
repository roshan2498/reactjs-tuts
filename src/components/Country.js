import React, { useState, useEffect } from "react";
import axios from "axios";

const Country = ({ country }) => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    const params = {
      access_key: process.env.REACT_APP_API_KEY,
      query: country.capital,
    };

    axios
      .get("http://api.weatherstack.com/current", { params })
      .then((res) => {
        const apiResponse = res.data;
        console.log(apiResponse);
        console.log(
          `Current temprature in ${apiResponse.location.name} is ${apiResponse.current.temprature} ℃`
        );
        setWeather([apiResponse]);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  if (weather.length > 0) {
    const currentWeather = weather[0].current;
    return (
      <div>
        <h1>{country.name}</h1>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
        <h2>Spoken languages</h2>
        <ul>
          {country.languages.map((language) => (
            <li key={language.name}>{language.name}</li>
          ))}
        </ul>
        <img src={country.flag} alt="Country flag" className="flag"></img>
        <h2>Weather in {country.capital}</h2>
        <p>Temperature: {currentWeather.temperature}° Celcius</p>
        <img src={currentWeather.weather_icons[0]} alt="Weather icon"></img>
        <p>
          wind: {currentWeather.wind_speed} mph direction{" "}
          {currentWeather.wind_dir}
        </p>
      </div>
    );
  }

  return (
    <div>
      <h1>{country.name}</h1>
      <p>capital: {country.capital}</p>
      <p>population: {country.population}</p>
      <h2>Spoken languages</h2>
      <ul>
        {country.languages.map((language) => (
          <li key={language.name}>{language.name}</li>
        ))}
      </ul>
      <img src={country.flag} alt="Country flag"></img>
    </div>
  );
};

export default Country;
