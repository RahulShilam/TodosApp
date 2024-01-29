import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    data: [],
  },
  reducers: {
    addAllTasks: (state, action) => {
      state.data.push(action.payload);
    },
    deleteSelectedTask: (state, action) => {
      state.data.splice(action.payload, 1);
    },
    deleteAllTasks: (state, action) => {
      state.data = [];
    },
  },
});
export const { addAllTasks, deleteSelectedTask, deleteAllTasks } =
  todoSlice.actions;

export const totalData = (state) => state.todo.data;

export default todoSlice.reducer;
