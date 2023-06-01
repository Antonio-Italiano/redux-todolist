import { createSlice } from '@reduxjs/toolkit';

const initTodos = [
    {
      id : 0,
      name : 'Call my mum',
      dueDate : new Date().toLocaleDateString(),
      user_id : 1
    },
    {
      id : 1,
      name : 'Go to scool',
      dueDate : new Date().toLocaleDateString(),
      user_id : 1
    },
    {
      id : 2,
      name : 'Call my love',
      dueDate : new Date().toLocaleDateString(),
      user_id : 1
    }
  ];

export const todosSlice = createSlice(
    {
        name: 'todos',
        initialState: initTodos,
        reducers: {
            addTodo(state, action) {
                console.log('reducer', state, action);
                state.push(action.payload);
            },
            removeTodo(state, action) {
                return state.filter( todo => todo.id !== action.payload.id);
            }
        }

    }
);
console.log(todosSlice);
const {actions, reducer} = todosSlice;
export const {addTodo, removeTodo} = actions;
export default reducer;