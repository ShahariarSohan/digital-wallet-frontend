

import { baseApi } from "../../base.api";

export const transactionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    recentTransaction: builder.query({
      query: () => ({
        url: "/transaction/recent",
        method: "GET",
      }),
      providesTags: ["RECENTTRANSACTIONS"],
    }),
    allTransactionStats: builder.query({
      query: () => ({
        url: "/stats/transaction",
        method: "GET",
      }),
      providesTags: ["TRANSACTIONSTATS"],
    }),
    allTransactions: builder.query({
      query: (params) => ({
        url: "/transaction",
        method: "GET",
        params
      }),
    }),
    allMyTransactions: builder.query({
      query: (params) => ({
        url: "/transaction/me",
        method: "GET",
        params
      }),
    }),
  }),
});

export const {useRecentTransactionQuery,useAllTransactionStatsQuery,useAllTransactionsQuery,useAllMyTransactionsQuery} = transactionApi;