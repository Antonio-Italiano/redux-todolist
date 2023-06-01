import { createSlice } from '@reduxjs/toolkit';

const initTodos = [
    {
      completed: true,  
      id : 0,
      name : 'Call my mum',
      dueDate : new Date().toLocaleDateString(),
      user_id : 1
    },
    {
      completed: false,  
      id : 1,
      name : 'Go to scool',
      dueDate : new Date().toLocaleDateString(),
      user_id : 1
    },
    {
      completed: false,  
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
            },
            toggleTodo(state, action) {
                const id = action.payload.id;
                state.map( todo => {
                    if(todo.id === id) {
                        todo.completed = !todo.completed;
                    }
                    return todo;
                });
            }
        }

    }
);
console.log(todosSlice);
const {actions, reducer} = todosSlice;
export const {addTodo, removeTodo, toggleTodo} = actions;
export default reducer;