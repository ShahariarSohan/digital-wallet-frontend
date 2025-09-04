import { baseApi } from "@/redux/base.api";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (userInfo) => {
        const role = userInfo.role;
        const data = {
          name: userInfo.name,
          email: userInfo.email,
          password: userInfo.password,
        };
        const url = role === "agent" ? "/agent/apply" : "/user/register";
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
        invalidatesTags: ["USER"],
      }),
    }),
    userInfo: builder.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    agentInfo: builder.query({
      query: () => ({
        url: "/agent/me",
        method: "GET",
      }),
      providesTags: ["AGENT"],
    }),
    adminInfo: builder.query({
      query: () => ({
        url: "/admin/me",
        method: "GET",
      }),
      providesTags:["ADMIN"]
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
  useAgentInfoQuery,
  useUserInfoQuery,
  useLogoutMutation,
  useAdminInfoQuery,
  useChangePasswordMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation
} = authApi;
