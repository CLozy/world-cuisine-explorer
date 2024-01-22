import { configureStore } from "@reduxjs/toolkit";
import meals from "./slices/MealsSlice";
import country from "./slices/CountrySlice";
import ingredients from "./slices/IngredientSlice";
import IngredientsFilter from "./slices/IngredientFilterSlice";
import CountryFilter from "./slices/CountryFilterSlice";

const store = configureStore({
  reducer: {
    meals,
    country,
    ingredients,
    CountryFilter,
    IngredientsFilter,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
