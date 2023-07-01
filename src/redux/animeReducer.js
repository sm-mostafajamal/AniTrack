import { createSlice } from "@reduxjs/toolkit";
import { getAnime } from "../services/animeService";
import { batch } from "react-redux";

const animeSlice = createSlice({
  name: "anime",
  initialState: {
    animeLists: {
      animes: [],
      upcoming: [],
      top: [],
    },
    pagination: null,
  },
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

export const getAllAnime = (page = 1) => {
  return async (dispatch) => {
    const animes = await getAnime("anime", page);
    const upcomingSeason = await getAnime("seasons/upcoming", page);
    const topAnimes = await getAnime("top/anime", page);

    batch(() => {
      dispatch(appendAnimes(animes.data));
      dispatch(appendUpcomingAnimes(upcomingSeason.data));
      dispatch(appendTopAnimes(topAnimes.data));
    });
    // dispatch(appendPagination(animes.pagination.has_next_page));
  };
};

export default animeSlice.reducer;
