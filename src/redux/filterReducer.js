import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allAnimes: {
    url: "anime",
    queries: { type: "tv", status: "complete", rating: "pg13", page: 1 },
  },
  upcoming: {
    url: "seasons/upcoming",
    queries: { filter: "tv", limit: 10 },
  },
  top: {
    url: "top/anime",
    queries: { type: "tv", filter: "airing", rating: "g" },
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterAllAnime: (state, action) => {
      return action.payload;
    },
  },
});

export const { filterAllAnime } = filterSlice.actions;

export default filterSlice.reducer;
