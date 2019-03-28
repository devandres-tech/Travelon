import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import weatherReducer from "./weatherReducer";

const rootReducer = combineReducers({
  country: searchReducer,
  weather: weatherReducer
});

export default rootReducer;