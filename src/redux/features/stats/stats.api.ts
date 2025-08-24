import { baseApi } from "../../base.api";

export const statsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allTransactionStats: builder.query({
      query: () => ({
        url: "/stats/transaction",
            method: "GET",
        providesTags:["TRANSACTIONSTATS"]
      }),
    }),
    
    
  }),
});

export const {useAllTransactionStatsQuery} = statsApi;