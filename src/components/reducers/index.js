import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  getCountry: searchReducer
});

export default rootReducer;