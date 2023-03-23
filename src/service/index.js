import axios from "axios";

// const BASE_URL = "http://localhost:4000/api/";
const BASE_URL = "https://minecraft-backend.vercel.app/api/";

export const getUser = (username) => {
  return axios.get(`${BASE_URL}${username}`);
};
