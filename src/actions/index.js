import axios from 'axios';

const COUNTRY_ROOT_URL = 'https://restcountries.eu/rest/v2/name';
const FETCH_CITY_ROOT_URL = 'http://api.geonames.org/timezoneJSON?';
// lat = 23 & lng=-102 & username=travelon
export const GET_COUNTRY = 'GET_COUNTRY';
export const FETCH_TIME = 'FETCH_TIME';

export function getCountry(country) {
  const url = `${COUNTRY_ROOT_URL}/${country}`;
  const request = axios.get(url);

  return {
    type: GET_COUNTRY,
    payload: request
  }
}

export function fetchTime(coords) {
  console.log('cords', coords);
  // const url = `${FETCH_CITY_ROOT_URL}lat=${coords[0]}&lng=${coords[1]}&username=travelon`;
  // const request = axios.get(url);

  return {
    type: FETCH_TIME,
    payload: { hei: 'hel' }
  }
}