import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    keyword: "",
    requestStatus: "",
    applicantsType: "",
    applicantName: "",
    applicationNumber: "",
    startDate: "",
    endDate: "",
    page: 1,
    limit: 10,
    dueDate: "",
  },
  selectedApplicationsIds: [],
  checkersFilters: {
    page: 1,
    limit: 10,
    checkerId: "",
  },
  requestsTable: {
    page: 1,
    limit: 10,
    service: "",
    query: "",
  },
  mainRequestsTable: {
    page: 1,
    limit: 10,
    category: "",
    status: "",
    query: "",
  },
};
export const applicationsTable = createSlice({
  name: "appApplications",
  initialState,
  reducers: {
    setFilters: (state, { payload }) => {
      state.filters = payload;
    },
    setSelectedApplicationsIds: (state, { payload }) => {
      state.selectedApplicationsIds = payload;
    },
    setCheckersFilters: (state, { payload }) => {
      state.checkersFilters = payload;
    },
    setRequestsTableFilters: (state, { payload }) => {
      state.requestsTable = payload;
    },
    setMainRequestsTable: (state, { payload }) => {
      state.mainRequestsTable = payload;
    },

    clearFilters: () => initialState,
  },
});

export const {
  setFilters,
  clearFilters,
  setSelectedApplicationsIds,
  setCheckersFilters,
  setRequestsTableFilters,
  setMainRequestsTable,
} = applicationsTable.actions;
export const applicationsSelector = (state) => state.appApplications;
