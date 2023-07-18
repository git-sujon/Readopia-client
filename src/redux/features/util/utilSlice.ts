import { createSlice } from "@reduxjs/toolkit";

interface IConfirm {
    isConfirm:boolean
    wishlist:number
}

const initialState:IConfirm = {
    isConfirm:false,
    wishlist:0
}

const utilSlice = createSlice({
    name:"util",
    initialState,
    reducers:{
        isDelete:(state)=> {
            state.isConfirm =!state.isConfirm
        },
        setWishlist:(state, action) => {
            state.wishlist = action.payload + 1
        }
    }
})

export const {isDelete} = utilSlice.actions
export default utilSlice.reducer