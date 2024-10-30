import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  catalog: false,
  adminToggle: false,
  user: {} || null,
  admin: {} || null,
};

const reduxState = createSlice({
  name: "states",
  initialState,
  reducers: {
    onToggleState: (state, { payload }) => {
      state.toggle = payload;
    },
    onAdminToggleState: (state, { payload }) => {
      state.adminToggle = payload;
    },
    onCatalogState: (state, { payload }) => {
      state.catalog = payload;
    },
    onUserState: (state, { payload }) => {
      state.user = payload;
    },
    onUserLogOut: (state) => {
      state.user = null;
    },
    onAdminState: (state, { payload }) => {
      state.admin = payload;
    },
    onAdminLogOut: (state) => {
      state.admin = null;
    },
  },
});

export const {
  onToggleState,
  onCatalogState,
  onAdminToggleState,
  onUserState,
  onUserLogOut,
  onAdminLogOut,
  onAdminState,
} = reduxState.actions;

export default reduxState.reducer;
