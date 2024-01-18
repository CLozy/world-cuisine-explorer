import { configureStore } from "@reduxjs/toolkit";
import meals from "./slices/MealsSlice";

const store = configureStore({
  reducer: {
    meals,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
