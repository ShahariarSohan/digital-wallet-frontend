import { baseApi } from "../../base.api";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deposit: builder.mutation({
      query: (depositInfo) => ({
        url: "/wallet/deposit",
        method: "POST",
        data: depositInfo,
      }),
      invalidatesTags: ["WALLET", "RECENTTRANSACTIONS", "TRANSACTIONSTATS"],
    }),
    withdraw: builder.mutation({
      query: (withdrawInfo) => ({
        url: "/wallet/withdraw",
        method: "POST",
        data: withdrawInfo,
      }),
      invalidatesTags: ["WALLET", "RECENTTRANSACTIONS", "TRANSACTIONSTATS"],
    }),
    sendMoney: builder.mutation({
      query: (sendMoneyInfo) => ({
        url: "/wallet/send",
        method: "POST",
        data: sendMoneyInfo,
      }),
      invalidatesTags: ["WALLET", "RECENTTRANSACTIONS", "TRANSACTIONSTATS"],
    }),
    updateUserProfile: builder.mutation({
      query: (userData) => {
         const data = {
          name: userData.name,
          phone: userData.phone,          
        };
        return{
        url: `/user/update/${userData.id}`,
        method: "PATCH",
        data: data,
        }
        
      },
      invalidatesTags: ["USER"],
    }),
  }),
});

export const { useDepositMutation, useWithdrawMutation, useSendMoneyMutation,useUpdateUserProfileMutation} =
  userApi;
