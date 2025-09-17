import { baseApi } from "../../base.api";

export const agentApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    cashIn: builder.mutation({
      query: (cashInInfo) => ({
        url: "/wallet/cashIn",
        method: "POST",
        data: cashInInfo,
      }),
      invalidatesTags: ["WALLET", "RECENT_TRANSACTIONS", "TRANSACTION_STATS"],
    }),
    cashOut: builder.mutation({
      query: (cashOutInfo) => ({
        url: "/wallet/cashOut",
        method: "POST",
        data: cashOutInfo,
      }),
      invalidatesTags: ["WALLET", "RECENT_TRANSACTIONS", "TRANSACTION_STATS"],
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
      invalidatesTags: ["MY_INFO"],
    }),
  }),
});

export const {useCashInMutation,useCashOutMutation,useUpdateAgentProfileMutation} = agentApi;
