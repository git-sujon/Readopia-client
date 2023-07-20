import { createSlice } from "@reduxjs/toolkit";

interface IConfirm {
  isConfirm: boolean;
}

const initialState: IConfirm = {
  isConfirm: false,
};

const utilSlice = createSlice({
  name: "util",
  initialState,
  reducers: {
    isDelete: (state) => {
      state.isConfirm = !state.isConfirm;
    },
  },
});

export const { isDelete } = utilSlice.actions;
export default utilSlice.reducer;
