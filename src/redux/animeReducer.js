import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "../services/animeService";

const animeSlice = createSlice({
  name: "anime",
  initialState: {
    animeLists: [],
    pagination: {},
  },
  reducers: {
    appendAnimes(state, action) {
      return {
        ...state,
        animeLists: state.animeLists.concat(...action.payload),
      };
    },
    appendPagination(state, action) {
      return { ...state, pagination: { ...action.payload } };
    },
  },
});

export const { appendAnimes, appendPagination } = animeSlice.actions;

export const getAllAnime = (page) => {
  return async (dispatch) => {
    const animes = await getAll(page);
    dispatch(appendAnimes(animes.data));
    dispatch(appendPagination(animes.pagination));
  };
};

export default animeSlice.reducer;
