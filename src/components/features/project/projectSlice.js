import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  done: null,
  onGoing: null,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.done = action.payload.done;
      state.onGoing = action.payload.onGoing;
    },
  },
});

export const { setProjects } = projectSlice.actions;

export const selectDone = (state) => state.project.done;
export const selectOnGoing = (state) => state.project.onGoing;

export default projectSlice.reducer;
