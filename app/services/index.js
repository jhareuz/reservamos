import axios from 'axios';

const key = 'a5a47c18197737e8eeca634cd6acb581'

export const searchCity = (city) =>axios.get(`https://search.reservamos.mx/api/v2/places?q=${city}`)
  .then(({ data }) => data);

export const openWeather = (lat, lon) =>axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&units=metric&appid=${key}`)
  .then(({ data }) => data);
