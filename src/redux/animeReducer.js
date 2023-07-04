import { createSlice } from "@reduxjs/toolkit";
import { getAnime } from "../services/animeService";
import { batch } from "react-redux";

const initialState = {
  animeLists: {
    allAnimes: [],
    upcoming: [],
    top: [],
  },
  hasPage: null,
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
          allAnimes: state.animeLists.allAnimes.concat(...action.payload),
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
        hasPage: action.payload,
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

export const getAllAnime = (filter, page) => {
  return async (dispatch) => {
    const animes = await getAnime(filter.url, {
      ...filter.queries,
      page: page,
    });
    batch(() => {
      if (filter.type === "allAnimes") {
        dispatch(appendAnimes(animes.data));
        dispatch(appendPagination(animes.pagination.has_next_page));
      } else if (filter.type === "upcoming") {
        dispatch(appendUpcomingAnimes(animes.data));
        dispatch(appendPagination(animes.pagination.has_next_page));
      } else if (filter.type === "top") {
        dispatch(appendTopAnimes(animes.data));
        dispatch(appendPagination(animes.pagination.has_next_page));
      }
    });
  };
};

export default animeSlice.reducer;
