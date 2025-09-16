import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "./axiosBaseQuery";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: axiosBaseQuery(),
  tagTypes: [
    "WALLET",
    "RECENT_TRANSACTIONS",
    "TRANSACTION_STATS",
    "USER",
    "AGENT",
    "ADMIN",
    "MY_INFO",
    "STATS"
  ],
  endpoints: () => ({}),
});
