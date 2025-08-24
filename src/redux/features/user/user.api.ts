import { baseApi } from "../../base.api";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
   
    deposit: builder.mutation({
      query: (depositInfo) => ({
        url: "/wallet/deposit",
        method: "POST",
        data: depositInfo,
        invalidatesTags: ["DEPOSIT"],
      }),
    }),
    withdraw: builder.mutation({
      query: (withdrawInfo) => ({
        url: "/wallet/withdraw",
        method: "POST",
        data: withdrawInfo,
        invalidatesTags: ["WITHDRAW"],
      }),
    }),
    sendMoney: builder.mutation({
      query: (sendMoneyInfo) => ({
        url: "/wallet/send",
        method: "POST",
        data: sendMoneyInfo,
        invalidatesTags: ["SENDMONEY"],
      }),
    }),
  }),
});

export const {useDepositMutation,useWithdrawMutation,useSendMoneyMutation} = userApi;
