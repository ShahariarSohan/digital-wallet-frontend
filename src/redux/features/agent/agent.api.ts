import { baseApi } from "../../base.api";

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
   
    cashIn: builder.mutation({
      query: (cashInInfo) => ({
        url: "/wallet/cashIn",
        method: "POST",
        data: cashInInfo,
        invalidatesTags: ["CASHIN"],
      }),
    }),
    cashOut: builder.mutation({
      query: (cashOutInfo) => ({
        url: "/wallet/cashOut",
        method: "POST",
        data: cashOutInfo,
        invalidatesTags: ["CASHOUT"],
      }),
    }),
   
    
    
  }),
});

export const {useCashInMutation,useCashOutMutation} = agentApi;
