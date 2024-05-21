import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const articleCollectionsApi = createApi({
    reducerPath: "articleCollectionsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/"}),
    endpoints: (builder) => ({
        getAllArticleCollections: builder.query({
            query: () => "articleCollections",
        }),
    }),

});

export const { useGetAllArticleCollectionsQuery } = articleCollectionsApi;