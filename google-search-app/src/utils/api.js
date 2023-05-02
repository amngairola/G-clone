import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";
const params = {
  key: "AIzaSyCHX6QX8zO1XJLL2jQIQDC-Lck9YnNskLI",
  cx: "f5d2c8b4af58545df",
};

export const fetchDataFromApi = async (payload) => {
  // Axios is a promised-based HTTP client for JavaScript
  const { data } = await axios.get(BASE_URL, {
    params: { ...params, ...payload },
  });
  return data;
};
