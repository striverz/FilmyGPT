import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        movieTrailer:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.topRatedMovies=action.payload;
        },
        addUpComingMovies:(state,action)=>{
            state.upComingMovies=action.payload;
        },
        addMovieTrailer:(state,action)=>{
            state.movieTrailer=action.payload
        }

    }
})
export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpComingMovies,addMovieTrailer}=moviesSlice.actions;

export default moviesSlice.reducer;