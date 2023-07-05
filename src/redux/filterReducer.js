import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allAnimes: {
    name: "allAnimes",
    url: "anime",
    queries: {},
  },
  upcoming: {
    name: "upcoming",
    url: "seasons/now",
    queries: {},
  },
  top: {
    name: "top",
    url: "top/anime",
    queries: { type: "tv", filter: "airing", rating: "pg13" },
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
    filterUpcomingAnime: (state, action) => {
      return {
        ...state,
        upcoming: {
          ...state.upcoming,
          queries: {
            ...state.upcoming.queries,
            ...action.payload,
          },
        },
      };
    },
    filterTopAnime: (state, action) => {
      return {
        ...state,
        top: {
          ...state.top,
          queries: {
            ...state.top.queries,
            ...action.payload,
          },
        },
      };
    },
  },
});

export const { filterAllAnime, filterUpcomingAnime, filterTopAnime } =
  filterSlice.actions;

export default filterSlice.reducer;
