import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        toogleGPTSearch:false,
    },
    reducers:{
        toogleGPT:(state,action)=>{
            state.toogleGPTSearch=!state.toogleGPTSearch;
        }
    }
})

export const {toogleGPT}=gptSlice.actions;
export default gptSlice.reducer;
