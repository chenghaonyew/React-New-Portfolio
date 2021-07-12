import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import projectReducer from "../components/features/project/projectSlice";

// Setting up redux store
export default configureStore({
  reducer: {
    project: projectReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
