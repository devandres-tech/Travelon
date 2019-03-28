import { combineReducers } from "redux";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  country: searchReducer
});

export default rootReducer;