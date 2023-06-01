import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice.js';
import filterReducer from '../features/todos/filterSlice'

const myLog = store => nextMiddleware => action => {
      // store.dispatch({type:'INIT_MY_LOG', payload: null })
      console.log(action.payload);
      // return 'block';
      return nextMiddleware(action);
    }

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    todos: todosReducer,
  },
  
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(myLog),
  
});
