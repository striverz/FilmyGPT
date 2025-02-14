import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        toogleGPTSearch:false,
        gptRecommendedMovies:null,
    },
    reducers:{
        toogleGPT:(state,action)=>{
            state.toogleGPTSearch=!state.toogleGPTSearch;
        },
        addGPTMovies:(state,action)=>{
            state.gptRecommendedMovies=action.payload;
            
        }
    }
})

export const {toogleGPT,addGPTMovies}=gptSlice.actions;
export default gptSlice.reducer;
