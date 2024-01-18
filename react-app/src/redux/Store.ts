import { configureStore } from "@reduxjs/toolkit";
import meals from "./slices/MealsSlice";
import country from "./slices/CountrySlice"; 

const store = configureStore({
  reducer: {
    meals,
    country,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
