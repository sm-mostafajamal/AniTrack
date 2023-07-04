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
  isLoading: true,
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
        isLoading: false,
      };
    },
    appendUpcomingAnimes: (state, action) => {
      return {
        ...state,
        animeLists: {
          ...state.animeLists,
          upcoming: state.animeLists.upcoming.concat(...action.payload),
        },
        isLoading: false,
      };
    },
    appendTopAnimes: (state, action) => {
      return {
        ...state,
        animeLists: {
          ...state.animeLists,
          top: state.animeLists.top.concat(...action.payload),
        },
        isLoading: false,
      };
    },
    emptyAnimes: (state, action) => {
      if (action.payload === "allAnimes") {
        return {
          ...state,
          animeLists: {
            ...state.animeLists,
            allAnimes: [],
          },
        };
      }
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
  emptyAnimes,
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
