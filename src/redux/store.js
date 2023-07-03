import { combineReducers, configureStore } from "@reduxjs/toolkit";
import animeReducer from "./animeReducer";
import filterReducer from "./filterReducer";

const reducer = combineReducers({
  anime: animeReducer,
  filter: filterReducer,
});

const store = configureStore({ reducer });

export default store;
