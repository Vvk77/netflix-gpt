import { createSlice } from "@reduxjs/toolkit";





const movieSlice = createSlice({
    name: "movies",
    initialState: {

         nowPlayingMovies: null,
  
        
        trailerVideo: null,


    },
    reducers:{
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },addNowPopularMovies:  (state, action) => {
            state.nowPopularMovies = action.payload
        },addTopRatedMovies:  (state, action) => {
            state.nowTopRatedMovies = action.payload
        },addUpcomingMovies:  (state, action) => {
            state.UpcomingMovies = action.payload
        },

        addTrailerVideo: (state,action) => {
            state.trailerVideo = action.payload


        }
    }






})

export const {addNowPlayingMovies, addTrailerVideo,addNowPopularMovies,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions
export default movieSlice.reducer