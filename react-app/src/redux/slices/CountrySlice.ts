import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Country {
    strArea: string;
  
}

type CountryState = {
  country: Country[];
  
};

const initialState: CountryState = {
  country: [],
};

export const getCountry = createAsyncThunk(
  "meals/fetchCountry",
  async (thunkAPI) => {
    const endpoint = `https://www.themealdb.com/api/json/v1/1/list.php?a=list`;
    const response = await fetch(endpoint);
    const { country } = (await response.json()) ?? {};

    return country ?? [];
  }
);

const CountrySlice = createSlice({
  name: "countrySlice",
  initialState,
  reducers: {
    loadCountry: (state, action) => {
      state.country = action.payload;
    },
    
  },
  extraReducers: (builder) => {
    builder.addCase(getCountry.fulfilled, (state, action) => {
      state.country = action.payload;
    });
  },
});

export const { loadCountry } = CountrySlice.actions;
export default CountrySlice.reducer;
