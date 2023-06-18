import { createSlice, current } from "@reduxjs/toolkit";
import { getAll } from "../services/animeService";

const animeSlice = createSlice({
  name: "anime",
  initialState: {
    animeLists: [],
    pagination: {},
  },
  reducers: {
    appendAnimes(state, action) {
      console.log(current(state));
      // state.animeLists.push(...action.payload);

      return { ...state, animeLists: [...action.payload] };
    },
    appendPagination(state, action) {
      return { ...state, pagination: { ...action.payload } };
    },
  },
});

export const { appendAnimes, appendPagination } = animeSlice.actions;

// export const allAnimes = (page = 1) => {
//   return async (dispatch) => {
//     const animes = await getAll(page);
//     console.log(animes);
//     // dispatch(appendAnimes(animes.data));
//     // dispatch(appendPagination(animes.pagination));
//   };
// };

export default animeSlice.reducer;
