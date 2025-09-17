import { baseApi } from "../../base.api";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    deposit: builder.mutation({
      query: (depositInfo) => ({
        url: "/wallet/deposit",
        method: "POST",
        data: depositInfo,
      }),
      invalidatesTags: ["WALLET", "RECENT_TRANSACTIONS", "TRANSACTION_STATS"],
    }),
    withdraw: builder.mutation({
      query: (withdrawInfo) => ({
        url: "/wallet/withdraw",
        method: "POST",
        data: withdrawInfo,
      }),
      invalidatesTags: ["WALLET", "RECENT_TRANSACTIONS", "TRANSACTION_STATS"],
    }),
    sendMoney: builder.mutation({
      query: (sendMoneyInfo) => ({
        url: "/wallet/send",
        method: "POST",
        data: sendMoneyInfo,
      }),
      invalidatesTags: ["WALLET", "RECENT_TRANSACTIONS", "TRANSACTION_STATS"],
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
      invalidatesTags: ["MY_INFO"],
    }),
  }),
});

export const { useDepositMutation, useWithdrawMutation, useSendMoneyMutation,useUpdateUserProfileMutation} =
  userApi;
