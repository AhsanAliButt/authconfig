import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface movies {
  title: string;
  year: number;
  votes: number;
  genreIds: number[];
  description: string;
}
const initialState: Array<movies> = [
  {
    title: "100% Wolf",
    year: 2020,
    votes: 65,
    genreIds: [10751, 16, 14],
    description:
      "Freddy Lupin, heir to a proud family line of werewolves, is in for a shock when on his 14th birthday his first 'warfing' goes awry, turning him into a ferocious poodle. The pack elders give Freddy until the next moonrise to prove he has the heart of a wolf, or risk being cast out forever. With the help of an unlikely ally in a streetwise stray named Batty, Freddy must prove he's 100% Wolf.",
  },
];

export const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addmovies: (state, action: PayloadAction<movies>) => {
      state.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addmovies } = movieSlice.actions;

export default movieSlice.reducer;
