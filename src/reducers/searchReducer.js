import { GET_COUNTRY } from '../actions';

export default function (state = [], action) {
  switch (action.type) {
    case GET_COUNTRY:
      console.log('data', action.payload.data[0])
      return [action.payload.data[0], ...state];
  }

  return state;
}