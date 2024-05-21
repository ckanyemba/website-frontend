import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const thriftCollectionsApi = createApi({
    reducerPath: "thriftCollectionsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/"}),
    endpoints: (builder) => ({
        getAllThriftCollections: builder.query({
            query: () => `thriftCollections`,
        }),
    }),

});

export const { useGetAllThriftCollectionsQuery } = thriftCollectionsApi;