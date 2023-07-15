import { createSlice } from "@reduxjs/toolkit";

interface IConfirm {
    isConfirm:boolean
}

const initialState:IConfirm = {
    isConfirm:false
}

const utilSlice = createSlice({
    name:"util",
    initialState,
    reducers:{
        isDelete:(state, action)=> {
            state.isConfirm = action.payload
        }
    }
})

export const {isDelete} = utilSlice.actions
export default utilSlice.reducer