import { configureStore } from "@reduxjs/toolkit";
import meals from "./slices/MealsSlice";
import country from "./slices/CountrySlice"; 
import ingredients from "./slices/IngredientSlice"; 

const store = configureStore({
  reducer: {
    meals,
    country,
    ingredients,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
