import axios from 'axios';

const COUNTRY_ROOT_URL = 'https://restcountries.eu/rest/v2/name';
const WEATHER_ROOT_UTL = 'https://api.openweathermap.org/data/2.5/forecast?'
const WEATHER_KEY = '60271f8873cd6fca6c2b2ce6c281a2c6';
// https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&units=imperial&appid=60271f8873cd6fca6c2b2ce6c281a2c6

export const GET_COUNTRY = 'GET_COUNTRY';
export const FETCH_TIME = 'FETCH_TIME';
export const GET_WEATHER = 'GET_WEATHER';

export function getCountry(country) {
  const url = `${COUNTRY_ROOT_URL}/${country}`;
  const request = axios.get(url);

  return {
    type: GET_COUNTRY,
    payload: request
  }
}

export function getWeather(city) {
  const url = `${WEATHER_ROOT_UTL}&q=${city}&units=imperial&appid=${WEATHER_KEY}`;
  const request = axios.get(url);
  return {
    type: GET_WEATHER,
    payload: request
  }
}