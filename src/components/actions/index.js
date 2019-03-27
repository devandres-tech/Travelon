import axios from 'axios';

export const GET_COUNTRY = 'get_country';

export function getCountry() {
  return {
    type: GET_COUNTRY,
  }
}