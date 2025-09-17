import { role } from "@/constants/role";
import { baseApi } from "@/redux/base.api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => {
        const userRole = userInfo.role;
        const data = {
          name: userInfo.name,
          email: userInfo.email,
          password: userInfo.password,
        };
        const url = userRole === role.agent ? "/agent/apply" : "/user/register";
        return {
          url,
          method: "POST",
          data,
        };
      },
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
      invalidatesTags: ["MY_INFO","WALLET"],
    }),
    myInfo: builder.query({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["MY_INFO"],
    }),

    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
    changePassword: builder.mutation({
      query: (passwordData) => ({
        url: "/auth/change-password",
        method: "POST",
        data: passwordData,
      }),
    }),
    forgetPassword: builder.mutation({
      query: (emailInfo) => ({
        url: "/auth/forget-password",
        method: "POST",
        data: emailInfo,
      }),
    }),
    resetPassword: builder.mutation({
      query: (resetPasswordInfo) => ({
        url: "/auth/reset-password",
        method: "POST",
        data: resetPasswordInfo,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useMyInfoQuery,
  useLogoutMutation,
  useChangePasswordMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation
} = authApi;
