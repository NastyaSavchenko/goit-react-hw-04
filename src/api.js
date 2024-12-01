import axios from "axios";

const BASE_URL = "https://api.unsplash.com/";

const KEY = "DFFAJvte7_3202CkSkoy4D99TLopMSlKH2lbGYHWT3U";

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
