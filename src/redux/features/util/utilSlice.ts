import { createSlice } from "@reduxjs/toolkit";

interface IConfirm {
  isConfirm: boolean;
  wishlist: string[];
  finished: string[];
}

const initialState: IConfirm = {
  isConfirm: false,
  wishlist: [],
  finished: [],
};

const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    isDelete: (state) => {
      state.isConfirm = !state.isConfirm;
    },
    setWishlist: (state, action) => {
      const bookId = action.payload;
      if (!state.wishlist.includes(bookId)) {
        state.wishlist.push(bookId);
      }
    },
    setFinished: (state, action) => {
      const bookId = action.payload;
      if (!state.finished.includes(bookId)) {
        state.finished.push(bookId);
      }
    },
  },
});

export const { isDelete, setWishlist, setFinished } = utilSlice.actions;
export default utilSlice.reducer;
