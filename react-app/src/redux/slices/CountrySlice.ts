// 
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Meal {
    strArea: string;
}

type MealState = {
  meals: Meal[];
  
};

const initialState: MealState = {
  meals: [],
};

export const getCountry = createAsyncThunk(
  "meals/fetchMealsByQuery",
  async ( thunkAPI) => {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
    const response = await fetch(endpoint);
    const { meals } = (await response.json()) ?? {};

    return meals ?? [];
  }
);

const CountrySlice = createSlice({
  name: "countrySlice",
  initialState,
  reducers: {
    loadMeals: (state, action) => {
      state.meals = action.payload;
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.meals = action.payload;
    });
  },
});

export const { loadMeals } = CountrySlice.actions;
export default CountrySlice.reducer;

