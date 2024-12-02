import axios from "axios";

const BASE_URL = "https://api.unsplash.com/";

const KEY = import.meta.env.VITE_KEY;

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    client_id: KEY,
  },
});

export const getImages = (query, page) => {
  const res = api.get(`search/photos?page=${page}&query=${query}`);
  return res;
};
