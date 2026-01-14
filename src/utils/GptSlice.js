import { createSlice } from "@reduxjs/toolkit";





const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },

    addGptMovies: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    clearGptData: (state) => {
      state.movieNames = null;
      state.movieResults = null;
    },
    
     
  },
});






export const {toggleGPTSearch , addGptMovies, clearGptData } = gptSlice.actions

export default gptSlice.reducer