import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface CountryFilter {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

type MealState = {
  meals: CountryFilter[];
};

const initialState: MealState = {
  meals: [],
};

export const getCountryMeals = createAsyncThunk(
  "meals/fetchMealsByQuery",
  async (query: string, thunkAPI) => {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`;
    const response = await fetch(endpoint);
    const { meals } = (await response.json()) ?? {};

    return meals ?? [];
  }
);

const CountryFilterSlice = createSlice({
  name: "countryFilterSlice",
  initialState,
  reducers: {
    loadMeals: (state, action) => {
      state.meals = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCountryMeals.fulfilled, (state, action) => {
      state.meals = action.payload;
    });
  },
});

export const { loadMeals } = CountryFilterSlice.actions;
export default CountryFilterSlice.reducer;
