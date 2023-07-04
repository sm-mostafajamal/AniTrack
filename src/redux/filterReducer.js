import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allAnimes: {
    name: "allAnimes",
    url: "anime",
    queries: {},
  },
  upcoming: {
    name: "upcoming",
    url: "seasons/upcoming",
    queries: { limit: 10 },
  },
  top: {
    name: "top",
    url: "top/anime",
    queries: { type: "tv", filter: "airing", limit: 10, rating: "g" },
  },
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterAllAnime: (state, action) => {
      return {
        ...state,
        allAnimes: {
          ...state.allAnimes,
          queries: {
            ...state.allAnimes.queries,
            ...action.payload,
          },
        },
      };
    },
  },
});

export const { filterAllAnime } = filterSlice.actions;

export default filterSlice.reducer;
