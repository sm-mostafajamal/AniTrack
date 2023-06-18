import { combineReducers, configureStore } from "@reduxjs/toolkit";
import animeReducer from "./animeReducer";

const reducer = combineReducers({
  anime: animeReducer,
});

const store = configureStore({ reducer });

export default store;
