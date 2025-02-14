import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        toogleGPTSearch:false,
        gptRecommendedMovies:null,
        shimmerUI:false
        
    },
    reducers:{
        toogleGPT:(state,action)=>{
            state.toogleGPTSearch=!state.toogleGPTSearch;
        },
        addGPTMovies:(state,action)=>{
            state.gptRecommendedMovies=action.payload;   
        },
        toogleShimmerUI:(state,action)=>{
            state.shimmerUI=!state.shimmerUI;
        }

    }
})

export const {toogleGPT,addGPTMovies,toogleShimmerUI}=gptSlice.actions;
export default gptSlice.reducer;
