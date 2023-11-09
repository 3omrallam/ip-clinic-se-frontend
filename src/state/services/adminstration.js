import { createApi } from "@reduxjs/toolkit/dist/query/react";
import createCustomBaseQuery from "../../state/services/createCustomBaseQuery";

export const administration = createApi({
  reducerPath: "appAdministrationService",
  baseQuery: createCustomBaseQuery({
    serviceName: "user-administration-service",
    excludeVersion: true,
  }),

  keepUnusedDataFor: 35,

  endpoints: (builder) => ({
    getStatisticsData: builder.mutation({
      query: (body) => ({
        url: `v1/statistics/pie-card`,
        method: "POST",
        body: body,
      }),
      transformResponse: (response) => response.payload,
    }),
    getLineChartData: builder.query({
      query: () => ({
        url: `v1/statistics/line-chart`,
      }),
      transformResponse: (response) => response.payload,
    }),
    getAppStatusLookup: builder.query({
      query: () => {
        return {
          url: `application-status`,
        };
      },
      transformResponse: (response) => response.payload,
    }),
    getRatingItems: builder.query({
      query: (category) => ({
        url: `task-eqm-item/category?categoryCode=${category}`,
      }),
      transformResponse: (response) => response.payload,
    }),
  }),
});

export const {
  useGetStatisticsDataMutation,
  useGetLineChartDataQuery,
  useGetAppStatusLookupQuery,
  useGetRatingItemsQuery,
} = administration;
