import { configureStore } from "@reduxjs/toolkit";
import { userSliceReducer } from "./slices/user-slice";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
  },
});
