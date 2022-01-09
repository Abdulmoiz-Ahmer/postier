import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    loginUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.userInfo = { ...state.userInfo, ...action.payload };
    },
    logOutUser: (state) => {
      state.userInfo = {};
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logOutUser } = userSlice.actions;

export const userSliceReducer = userSlice.reducer;
