import { createSlice } from "@reduxjs/toolkit";

interface ISearchTerm {
  searchTerm: string | null;
  searchValue: string | null;
}

const initialState: ISearchTerm = {
  searchTerm: "searchTerm",
  searchValue: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action?.payload;
    },
  },
});


export const {setSearchTerm, setSearchValue} = bookSlice.actions
export default bookSlice.reducer
