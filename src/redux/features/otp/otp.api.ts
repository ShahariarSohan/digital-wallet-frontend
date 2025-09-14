import { baseApi } from "../../base.api";

export const otpApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    sendOtp: builder.mutation({
      query: (userData) => ({
        url: "/otp/send",
        method: "POST",
        data: userData,
      }),
    }),
    verifyOtp: builder.mutation({
      query: (userInfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: userInfo,
      }),
    }),
  }),
});

export const { useSendOtpMutation, useVerifyOtpMutation } = otpApi;
