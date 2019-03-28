import axios from 'axios';

const COUNTRY_ROOT_URL = 'https://restcountries.eu/rest/v2/name';
export const GET_COUNTRY = 'GET_COUNTRY';

export function getCountry(country) {
  const url = `${COUNTRY_ROOT_URL}/${country}`;
  const request = axios.get(url);

  console.log('req', request);
  return {
    type: GET_COUNTRY,
    payload: request
  }
}