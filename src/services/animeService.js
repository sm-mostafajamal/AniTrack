import axios from "axios";

const baseURL = "https://api.jikan.moe/v4/anime";
// const topAnimeURL = "https://api.jikan.moe/v4/top/anime"
const upcomingSeasonURL = "https://api.jikan.moe/v4/seasons/upcoming"

export const getUpcomingSeason = async () => {
  const res = await axios.get(upcomingSeasonURL);
  return res.data;
};
export const getAll = async (page) => {
  const res = await axios.get(baseURL, { params: { page: page } });
  return res.data;
};

// export const getTopAnime = async () => {
//   const res = await axios.get(topAnimeURL);
//   return res.data;
// };
// export const getAll = () => axios.get(baseURL).then((res) => res.data);
