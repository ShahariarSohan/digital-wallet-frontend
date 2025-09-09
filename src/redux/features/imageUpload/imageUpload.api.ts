import { baseApi } from "../../base.api";

export const imageUploadApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    imageUpload: builder.mutation({
      query: ({id,formData}) => ({
        url: `/image/upload/${id}`,
        method: "PATCH",
        data:formData
      }),
      invalidatesTags: ["USER","AGENT"],
    }),
  }),
});

export const { useImageUploadMutation } = imageUploadApi;
