import axios from "axios";

const baseURL = "https://api.jikan.moe/v4/anime";
// "https://api.jikan.moe/v4/anime"
export const getAll = async (page) => {
  const res = await axios.get(baseURL, { params: { page: page } });
  return res.data;
};
// export const getAll = () => axios.get(baseURL).then((res) => res.data);
