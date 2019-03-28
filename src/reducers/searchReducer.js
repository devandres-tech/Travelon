import { GET_COUNTRY } from '../actions';
import { FETCH_TIME } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case GET_COUNTRY:
      return [action.payload.data[0], ...state];
    case FETCH_TIME:
      console.log('time', action.payload);
      return [action.payload, ...state]
    default: state = [];
  }

  return state;
}