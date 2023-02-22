import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
  complated: false,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodd(state, action) {
      state.todo.push(action.payload);
    },
    deleteTodo(state, action) {
      state.todo = state.todo.filter((el) => el.id !== action.payload);
    },
    deleteAll(state) {
      state.todo = [];
    },
    completedTodo(state, action) {
      state.todo = state.todo.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            complated: !item.complated,
          };
        }
        return item;
      });
    },
    editTodo(state, action) {
      state.todo = state.todo.map((element) => {
        if (element.id === action.payload.id) {
          return {
            ...element,
            title: action.payload.editValue,
          };
        }
        return element;
      });
    },
  },
});

export const todoActions = todoSlice.actions;
export default todoSlice;
