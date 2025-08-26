

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
    AllTransactions: builder.query({
      query: () => ({
        url: "/transaction",
        method: "GET",
      }),
    }),
  }),
});

export const {useRecentTransactionQuery,useAllTransactionStatsQuery,useAllTransactionsQuery} = transactionApi;