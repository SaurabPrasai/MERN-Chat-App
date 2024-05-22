import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  loading: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signupStart: (state) => {
      (state.error = null), (state.loading = true);
    },
    signupSuccess: (state, action) => {
      (state.error = null), (state.loading = false);
    },
    signupFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    loginStart: (state) => {
      (state.error = null), (state.loading = true);
    },
    loginSuccess: (state, action) => {
      (state.user = action.payload), (state.error = null), (state.loading = false);
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  signupStart,
  signupSuccess,
  signupFailure,
  loginStart,
  loginSuccess,
  loginFailure,
} = userSlice.actions;

export default userSlice.reducer;
