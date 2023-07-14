import { createSlice } from "@reduxjs/toolkit";
import { getAnime } from "../services/animeService";

const initialState = {
  animeLists: {
    allAnimes: [],
    upcoming: [],
    top: [],
    anime: [],
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
    appendSelectedSingleAnime: (state, action) => {
      state.animeLists.anime = action.payload;
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
      } else if (action.payload === "top") {
        // have to change it in switch
        return {
          ...state,
          animeLists: {
            ...state.animeLists,
            top: [],
          },
        };
      } else if (action.payload === "upcoming") {
        return {
          ...state,
          animeLists: {
            ...state.animeLists,
            upcoming: [],
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
  appendSelectedSingleAnime,
  emptyAnimes,
  appendPagination,
} = animeSlice.actions;

export const getAllAnime = (filter, page) => {
  return async (dispatch) => {
    const animes = await getAnime(filter.url, {
      ...filter.queries,
      page: page,
    });
    // switch
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
  };
};
export const getSingleAnime = (url) => {
  return async (dispatch) => {
    const anime = await getAnime(url);
    return dispatch(appendSelectedSingleAnime(anime.data));
  };
};
export default animeSlice.reducer;
