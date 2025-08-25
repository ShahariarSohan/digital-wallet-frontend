
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
    allTransactions: builder.query({
      query: () => ({
        url: "/stats/transaction",
        method: "GET",
      }),
      providesTags: ["TRANSACTIONSTATS"],
    }),
  }),
});

export const {useRecentTransactionQuery,useAllTransactionsQuery} = transactionApi;