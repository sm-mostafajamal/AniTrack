import axios from "axios";

const baseURL = "https://api.jikan.moe/v4/";

export const getAnime = async (url, query) => {
  const res = await axios({
    method: "get",
    url: url,
    baseURL: baseURL,
    params: { ...query },
  });
  return res.data;
};
