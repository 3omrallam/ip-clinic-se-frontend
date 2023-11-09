import { createSlice } from "@reduxjs/toolkit";

import { normalizeRoles } from "../helpers/authHelpers";

const initialState = {
  isAuthing: false,
  isLoggedin: false,
  accessToken: "",
  refreshToken: "",
  currentWidth: 1440,
  isSidebarMenuOpenedByDefault: true,

  userData: null,
  userRoles: null,
  featureFlags: null,

  _mfesRegistered: ["appContainer"],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setIsAuthing: (state, action) => {
      state.isAuthing = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;

      const normalizedRoles = normalizeRoles(action.payload.roles);
      state.userRoles = normalizedRoles;
      state.featureFlags = Object.keys(normalizedRoles).reduce(
        (acc, key) => ({
          ...acc,
          [key]:
            !!normalizedRoles[key] &&
            Object.values(normalizedRoles[key]).some((r) => !!r),
        }),
        {},
      );
    },
    userLoggedIn: (state, action) => {
      state.isLoggedin = true;
      state.userData = action.payload.userData;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
    userLoggedOut: (state, action) => {
      state.isLoggedin = false;
      state.userData = "";
      state.accessToken = "";
      state.refreshToken = "";
      state.usedCustomerCode = "";
    },

    updateCurrentWidth: (state, payload) => {
      state.currentWidth = payload.payload;
    },
    toggleSidebar: (state) => {
      state.isSidebarMenuOpenedByDefault = !state.isSidebarMenuOpenedByDefault;
    },
    hideSidebar: (state) => {
      state.isSidebarMenuOpenedByDefault = false;
    },

    mfeRegistered: (state, action) => {
      state._mfesRegistered = [...state._mfesRegistered, action.payload];
    },
  },
});

export const {
  setIsAuthing,
  setUserData,
  userLoggedIn,
  userLoggedOut,
  updateCurrentWidth,
  toggleSidebar,
  hideSidebar,

  mfeRegistered,
} = appSlice.actions;

export const appSelector = (state) => state.app;
