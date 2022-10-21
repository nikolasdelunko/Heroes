import { configureStore } from "@reduxjs/toolkit";
import helpersSlice from "./helpers";
import heroSlice from "./hero";

export default configureStore({
  reducer: {
    helpers: helpersSlice,
    hero: heroSlice,
  },
});
