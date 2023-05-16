import { createFetch } from "@vueuse/core";

const baseURL = "https://httpbin.org/";

export const useFetchWithBearerToken = createFetch({
  baseUrl: baseURL,
  options: {
    async beforeFetch({ options }) {
      const myToken = "test";
      // @ts-ignore
      options.headers.Authorization = `Bearer ${myToken}`;

      return { options };
    },
  },
  fetchOptions: {
    mode: "cors",
  },
});
