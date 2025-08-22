import { baseApi } from "../base.api";

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
      }),
    }),
  }),
});

export const { useRegisterMutation,useLoginMutation } = authApi;
