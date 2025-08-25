import { baseApi } from "../../base.api";

export const statsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    allTransactionStats: builder.query({
      query: () => ({
        url: "/stats/transaction",
            method: "GET",
        providesTags:["STATS"]
      }),
    }),
    allUserStats: builder.query({
      query: () => ({
        url: "/stats/user",
            method: "GET",
        providesTags:["STATS"]
      }),
    }),
    allAgentStats: builder.query({
      query: () => ({
        url: "/stats/agent",
            method: "GET",
        providesTags:["STATS"]
      }),
    }),
    myTransactionStats: builder.query({
      query: () => ({
        url: "/stats/myTransaction",
            method: "GET",
        
      }),
    }),
    
    
  }),
});

export const {useAllTransactionStatsQuery,useAllAgentStatsQuery,useAllUserStatsQuery,useMyTransactionStatsQuery} = statsApi;