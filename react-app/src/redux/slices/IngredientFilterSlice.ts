import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface IngredientsFilter {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

type MealState = {
  meals: IngredientsFilter[];
};

const initialState: MealState = {
  meals: [],
};

export const getIngredientsMeals = createAsyncThunk(
  "meals/fetchMealsByQuery",
  async (query: string, thunkAPI) => {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${query}`;
    const response = await fetch(endpoint);
    const { meals } = (await response.json()) ?? {};

    return meals ?? [];
  }
);

const IngredientsFilterSlice = createSlice({
  name: "ingredientsFilterSlice",
  initialState,
  reducers: {
    loadMeals: (state, action) => {
      state.meals = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getIngredientsMeals.fulfilled, (state, action) => {
      state.meals = action.payload;
    });
  },
});

export const { loadMeals } = IngredientsFilterSlice.actions;
export default IngredientsFilterSlice.reducer;
