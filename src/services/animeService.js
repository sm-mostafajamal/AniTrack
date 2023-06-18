import axios from "axios";

export const getAll = () =>
  axios.get("https://api.jikan.moe/v4/anime").then((res) => res.data);
