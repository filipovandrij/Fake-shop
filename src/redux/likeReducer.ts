import { createSlice } from "@reduxjs/toolkit";

type likeProducrsType = { 
    [id:number]:boolean
}

export const initialState: likeProducrsType = {
1:true,
3:true,
}


export const likeSlice = createSlice({
    name:'like',
initialState,
reducers:{},
})


export default likeSlice.reducer