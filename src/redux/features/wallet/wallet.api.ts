import { baseApi } from "../../base.api";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    myWallet: builder.query({
      query: () => ({
        url: "/wallet/me",
        method: "GET",
      }),
      providesTags: ["WALLET"],
    }),
  }),
});

export const {useMyWalletQuery} = walletApi;
