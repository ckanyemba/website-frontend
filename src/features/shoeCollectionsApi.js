import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shoeCollectionsApi = createApi({
    reducerPath: "shoeCollectionsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/"}),
    endpoints: (builder) => ({
        getAllShoeCollections: builder.query({
            query: () => `shoeCollections`,
        }),
    }),

});

export const { useGetAllShoeCollectionsQuery } = shoeCollectionsApi;