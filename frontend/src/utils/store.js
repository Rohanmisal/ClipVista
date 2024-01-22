import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice.js";
import searchSlice from "./searchSlice.js";

const store = configureStore({
  reducer:{
    app: appSlice,
    search: searchSlice,
  }
});

export default store