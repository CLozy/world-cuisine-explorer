import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Meal {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

type MealState = {
  meals: Meal[];
  meal?: Meal
};

const initialState: MealState = {
  meals: [],
};

export const searchMeals = createAsyncThunk(
  "meals/fetchMealsByQuery",
  async (query: string, thunkAPI) => {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`;
    const response = await fetch(endpoint);
    const { meals } = (await response.json()) ?? {};

    return meals ?? [];
  }
);

const MealSlice = createSlice({
  name: "mealsSlice",
  initialState,
  reducers: {
    loadMeals: (state, action) => {
      state.meals = action.payload;
    },
    setMeal: (state, action) => {
      state.meal = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(searchMeals.fulfilled, (state, action) => {
      state.meals = action.payload;
    });
  },
});

export const { loadMeals } = MealSlice.actions;
export default MealSlice.reducer;
