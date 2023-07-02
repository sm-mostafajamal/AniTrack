import { createSlice } from "@reduxjs/toolkit";
import { getAnime } from "../services/animeService";
import { batch } from "react-redux";

const initialState = {
  animeLists: {
    animes: [],
    upcoming: [],
    top: [],
  },
  // pagination: null,
};

const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    appendAnimes(state, action) {
      return {
        ...state,
        animeLists: {
          ...state.animeLists,
          animes: state.animeLists.animes.concat(...action.payload),
        },
      };
    },
    appendUpcomingAnimes: (state, action) => {
      return {
        ...state,
        animeLists: {
          ...state.animeLists,
          upcoming: state.animeLists.upcoming.concat(...action.payload),
        },
      };
    },
    appendTopAnimes: (state, action) => {
      return {
        ...state,
        animeLists: {
          ...state.animeLists,
          top: state.animeLists.top.concat(...action.payload),
        },
      };
    },
    appendPagination(state, action) {
      return {
        ...state,
        pagination: action.payload,
      };
    },
  },
});

export const {
  appendAnimes,
  appendUpcomingAnimes,
  appendTopAnimes,
  appendPagination,
} = animeSlice.actions;

export const getAllAnime = (data) => {
  return async (dispatch) => {
    const animes = await getAnime(data.queries.url, ...data.queries.query);
    // console.log(animes);
    batch(() => {
      if (data.type === "allAnime") dispatch(appendAnimes(animes.data));
      if (data.type === "upcoming") dispatch(appendUpcomingAnimes(animes.data));
      if (data.type === "top") dispatch(appendTopAnimes(animes.data));
    });
    // dispatch(appendPagination(animes.pagination.has_next_page));
  };
};

export default animeSlice.reducer;
