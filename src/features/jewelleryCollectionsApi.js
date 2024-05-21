import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const jewelleryCollectionsApi = createApi({
    reducerPath: "jewelleryCollectionsApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/"}),
    endpoints: (builder) => ({
        getAllJewelleryCollections: builder.query({
            query: () => `jewelleryCollections`,
        }),
    }),

});

export const { useGetAllJewelleryCollectionsQuery } = jewelleryCollectionsApi;