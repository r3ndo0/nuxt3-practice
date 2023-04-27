import axios from "axios";

export const publicFetch = axios.create({
  baseURL: "https://httpbin.org/",
});

const testToken = "test";
export const privateFetch = axios.create({
  baseURL: "https://httpbin.org/",
  headers: {
    Authorization: `Bearer ${testToken}`,
  },
});
