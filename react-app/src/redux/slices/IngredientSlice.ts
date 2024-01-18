import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Ingredients {
    idIngredient: string;
    strIngredient: string;
    strDescription: string;
    strType: string;
  
}

type CountryState = {
    ingredients: Ingredients[];
  
};

const initialState: CountryState = {
    ingredients: [],
};

export const getIngredients = createAsyncThunk(
  "meals/fetchIngredients",
  async (thunkAPI) => {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/list.php?i=list`;
    const response = await fetch(endpoint);
    const { ingredients } = (await response.json()) ?? {};

    return ingredients?? [];
  }
);

const IngredientsSlice = createSlice({
  name: "ingredientsSlice",
  initialState,
  reducers: {
    loadIngredients: (state, action) => {
      state.ingredients = action.payload;
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(getIngredients.fulfilled, (state, action) => {
      state.ingredients = action.payload;
    });
  },
});

export const { loadIngredients } = IngredientsSlice.actions;
export default IngredientsSlice.reducer;
