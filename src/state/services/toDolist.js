import { createApi } from "@reduxjs/toolkit/query/react";
import createCustomBaseQuery from "../../state/services/createCustomBaseQuery";

export const appToDoListApi = createApi({
  reducerPath: "appToDoListServices",
  baseQuery: createCustomBaseQuery({
    serviceName: "e-filing-bpm-service",
    excludeVersion: true,
  }),

  keepUnusedDataFor: 1,
  refetchOnMountOrArgChange: true,

  endpoints: (builder) => ({
    getToDoList: builder.query({
      query: (filters) => {
        const filteredObj = Object.fromEntries(
          Object.entries(filters).filter(([_, value]) => value !== ""),
        );
        return {
          url: `v1/task/me`,
          params: filteredObj,
        };
      },
      transformResponse: (response) => response.payload,
    }),

    getAdminTasks: builder.query({
      query: (filters) => {
        const filteredObj = Object.fromEntries(
          Object.entries(filters).filter(([_, value]) => value !== ""),
        );
        return {
          url: `v1/task/admin-tasks`,
          params: filteredObj,
        };
      },
      transformResponse: (response) => response.payload,
    }),
    getStatistics: builder.query({
      query: () => ({
        url: `v1/task/request-type`,
      }),
      transformResponse: (response) => response.payload,
    }),
    getCheckersList: builder.query({
      query: ({ limit, page }) => ({
        url: `v1//users/info`,
        params: {
          limit,
          page,
        },
      }),
      transformResponse: (response) => response.payload,
    }),
    assignChecker: builder.mutation({
      query: ({ applicationsIds, checkerId }) => ({
        url: `v1//users/info`,
        method: "POST",
        body: {
          applicationsIds,
          checkerId,
        },
      }),
      transformResponse: (response) => response.payload,
    }),

    // search & query
    getAllAvailableServices: builder.query({
      query: () => ({
        url: `/support-service/requests`,
      }),
      transformResponse: (response) => response.payload,
    }),

    getRequestsList: builder.query({
      query: (filters) => {
        const filteredObj = Object.fromEntries(
          Object.entries(filters).filter(([_, value]) => value !== ""),
        );
        return {
          url: `/support-service/previous-requests/filter`,
          params: filteredObj,
        };
      },
      providesTags: ["REQ_LIST"],
      transformResponse: (response) => response.payload,
      keepUnusedDataFor: 1,
    }),
    getMainRequestsList: builder.query({
      query: (filters) => {
        const filteredObj = Object.fromEntries(
          Object.entries(filters).filter(([_, value]) => value !== ""),
        );
        return {
          url: `application/retrieve/all`,
          params: filteredObj,
        };
      },
      transformResponse: (response) => response.payload,
      keepUnusedDataFor: 1,
    }),
    updateServiceRating: builder.mutation({
      query: (data) => ({
        url: `/task-eqm`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["SERVICE_SURVEY", "SERVICE_TASK"],
      transformResponse: (response) => response.payload,
    }),
  }),
});

export const {
  useGetToDoListQuery,
  useGetCheckersListQuery,
  useAssignCheckerMutation,
  useGetStatisticsQuery,
  useGetAdminTasksQuery,
  useGetRequestsListQuery,
  useGetAllAvailableServicesQuery,
  useGetMainRequestsListQuery,
  useUpdateServiceRatingMutation,
} = appToDoListApi;
