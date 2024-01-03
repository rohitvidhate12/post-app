import axios from "axios";
import { BASE_URL } from "../utils/helper";

export const getPosts = () => {
  return axios.get(`${BASE_URL}/posts`);
};

export const getPostDetail = (id) => {
  return axios.get(`${BASE_URL}/posts/${id}`);
};
