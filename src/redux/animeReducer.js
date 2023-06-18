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
      return { ...state, animeLists: [...action.payload] };
    },
    appendPagination(state, action) {
      return { ...state, pagination: { ...action.payload } };
    },
  },
});

export const { appendAnimes, appendPagination } = animeSlice.actions;

export const allAnimes = () => {
  return async (dispatch) => {
    const animes = await getAll();
    dispatch(appendAnimes(animes.data));
    dispatch(appendPagination(animes.pagination));
  };
};

export default animeSlice.reducer;
