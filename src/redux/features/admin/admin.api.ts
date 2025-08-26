import { baseApi } from "../../base.api";

export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllAgents: builder.query({
      query: (params) => ({
        url: "/agent",
        method: "GET",
        params
      }),
      providesTags: ["AGENT"],
    }),
    getAllUsers: builder.query({
      query: (params) => ({
        url: "/user",
        method: "GET",
        params
      }),
      providesTags: ["USER"],
    }),
    updateAgentByAdmin: builder.mutation({
      query: ({ id, approvalStatus }) => ({
        url: `/agent/update/${id}`,
        method: "PATCH",
        data: { approvalStatus },
      }),
      invalidatesTags: ["AGENT"],
    }),
    updateUserByAdmin: builder.mutation({
      query: ({ id, status }) => ({
        url: `/user/update/${id}`,
        method: "PATCH",
        data: { status },
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const { useGetAllAgentsQuery, useGetAllUsersQuery,useUpdateAgentByAdminMutation,useUpdateUserByAdminMutation } = adminApi;
