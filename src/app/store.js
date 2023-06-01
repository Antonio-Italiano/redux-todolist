import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice.js';
import filterReducer from '../features/todos/filterSlice'
export const store = configureStore({
  reducer: {
    filter: filterReducer,
    todos: todosReducer,
  },
});
