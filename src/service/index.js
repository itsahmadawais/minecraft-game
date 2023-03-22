import axios from "axios";

export const getUser = (username) => {
  return axios.get(
    `https://api.mojang.com/users/profiles/minecraft/${username}`
  );
};
