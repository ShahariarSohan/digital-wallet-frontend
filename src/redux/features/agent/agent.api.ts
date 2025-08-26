import { baseApi } from "../../base.api";

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    cashIn: builder.mutation({
      query: (cashInInfo) => ({
        url: "/wallet/cashIn",
        method: "POST",
        data: cashInInfo,
      }),
      invalidatesTags: ["WALLET", "RECENTTRANSACTIONS", "TRANSACTIONSTATS"],
    }),
    cashOut: builder.mutation({
      query: (cashOutInfo) => ({
        url: "/wallet/cashOut",
        method: "POST",
        data: cashOutInfo,
      }),
      invalidatesTags: ["WALLET", "RECENTTRANSACTIONS", "TRANSACTIONSTATS"],
    }),
    updateAgentProfile: builder.mutation({
      query: (userData) => {
        const data = {
          name: userData.name,
          phone: userData.phone,
        };
        return {
          url: `/agent/update/${userData.id}`,
          method: "PATCH",
          data: data,
        };
      },
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {useCashInMutation,useCashOutMutation,useUpdateAgentProfileMutation} = agentApi;
