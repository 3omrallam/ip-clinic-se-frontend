import { createSlice } from "@reduxjs/toolkit";
import { TOAST_DEAFULT_SETTING } from "../constants/system";

const initialState = {
  show: false,
  title: "",
  body: "",
  customIcon: null,
  duration: TOAST_DEAFULT_SETTING.duration,
  position: TOAST_DEAFULT_SETTING.position,
  type: TOAST_DEAFULT_SETTING.type,
  hasIcon: false,
  variant: TOAST_DEAFULT_SETTING.variant,
  className: "",
  animation: true,
  onClose: () => {},
  onDurationEnd: () => {},
};
export const Toast = createSlice({
  name: "Toast",
  initialState,
  reducers: {
    showToast: (state, { payload }) => {
      return {
        ...state,
        ...payload,
        show: true,
      };
    },
    hideToast: (state, action) => {
      return initialState;
    },
  },
});
export const { showToast, hideToast } = Toast.actions;
export const toastSelector = (state) => state.Toast;
