import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface moviesAction {
  name: string;
  thumbnail: string;
  description: string;
}

const initialState: moviesAction = {
  name: "Ahsan",
  thumbnail: "",
  description: "",
};

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = movieSlice.actions;

export default movieSlice.reducer;
