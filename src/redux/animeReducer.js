import { createSlice } from "@reduxjs/toolkit";
import { getAll, getUpcomingSeason } from "../services/animeService";

const animeSlice = createSlice({
  name: "anime",
  initialState: {
    animeLists: {
      animes: [],
      upcoming: [],
    },
    pagination: null,
  },
  reducers: {
    appendAnimes(state, action) {
      if (action.payload.type === "animes") {
        return {
          ...state,
          animeLists: {
            ...state.animeLists,
            animes: state.animeLists.animes.concat(
              ...action.payload.payloadFromServer.data
            ),
          },
        };
      } else if (action.payload.type === "upcomingSeason") {
        return {
          ...state,
          animeLists: {
            ...state.animeLists,
            upcoming: state.animeLists.upcoming.concat(
              ...action.payload.payloadFromServer.data
            ),
          },
        };
      }
    },
    appendPagination(state, action) {
      return {
        ...state,
        pagination: action.payload,
      };
    },
  },
});

export const { appendAnimes, appendPagination } = animeSlice.actions;

export const getAllAnime = (page) => {
  return async (dispatch) => {
    const animes = await getAll(page);

    dispatch(
      appendAnimes({
        type: "animes",
        payloadFromServer: animes,
      })
    );
    // dispatch(appendPagination(animes.pagination.has_next_page));
  };
};

export const getUpcomingAnimeSeason = () => {
  return async (dispatch) => {
    const upcomingSeason = await getUpcomingSeason();
    dispatch(
      appendAnimes({
        type: "upcomingSeason",
        payloadFromServer: upcomingSeason,
      })
    );
  };
};

export default animeSlice.reducer;
