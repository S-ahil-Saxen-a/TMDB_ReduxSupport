import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const tmdbReducer = createSlice({
  name: "tmdb",
  initialState,
  reducers: {
    savePopularMovies: (state, action) => {
        state.data = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { savePopularMovies } = tmdbReducer.actions;

export default tmdbReducer.reducer;
