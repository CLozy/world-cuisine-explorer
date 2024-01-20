
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Meal {
    idIngredient: string;
    strIngredient: string;
    strDescription: string;
    strType: string;
    
}

type MealState = {
  meals: Meal[];
  
};

const initialState: MealState = {
  meals: [],
};

export const getIngredients = createAsyncThunk(
  "meals/fetchMealsByQuery",
  async ( thunkAPI) => {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
    const response = await fetch(endpoint);
    const { meals } = (await response.json()) ?? {};

    return meals ?? [];
  }
);

const IngredientsSlice = createSlice({
  name: "ingredientsSlice",
  initialState,
  reducers: {
    loadMeals: (state, action) => {
      state.meals = action.payload;
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(getIngredients.fulfilled, (state, action) => {
      state.meals = action.payload;
    });
  },
});

export const { loadMeals } = IngredientsSlice.actions;
export default IngredientsSlice.reducer;

