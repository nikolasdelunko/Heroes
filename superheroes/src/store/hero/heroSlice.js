import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  heroes: null,
};

const userSlice = createSlice({
  name: "hero",
  initialState,
  reducers: {
    setHero(state, action) {
			state.heroes = action.payload
    },
  },
});

export const { setHero } = userSlice.actions;

export default userSlice.reducer;
