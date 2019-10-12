import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

// all stream reducers hooked up
export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer
});
