import { configureStore } from "@reduxjs/toolkit";
import meals from "./slices/MealsSlice";
import country from "./slices/CountrySlice"; 
import ingredients from "./slices/IngredientSlice"; 
import CountryFilterSlice from "./slices/CountryFilterSlice";
import IngredientFilterSlice from "./slices/IngredientFilterSlice";

const store = configureStore({
  reducer: {
    meals,
    country,
    ingredients,
    CountryFilterSlice,
    IngredientFilterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
