import { combineReducers } from "redux";
import { firebaseReducer } from 'react-redux-firebase'
import auth from "./auth";

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  auth: auth,
})

export default rootReducer;
