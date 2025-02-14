import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const moviesSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        topRatedMovies:null,
        upComingMovies:null,
        movieTrailer:null,
        watchPlayerVideo:null,
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
        },
        addWatchPlayerVideo:(state,action)=>{
            state.watchPlayerVideo=action.payload
        },
        removeWatchPlayerVideo:(state,action)=>{
            state.watchPlayerVideo=null;
        }

    }
})
export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addUpComingMovies,addMovieTrailer,addWatchPlayerVideo,removeWatchPlayerVideo}=moviesSlice.actions;

export default moviesSlice.reducer;