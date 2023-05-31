import { createStore } from 'redux';

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
  ]

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO' :
        return [action.payload, ...state];
        
        case 'DELETE_TODO' :
        return state.filter(t => t.id !== action.payload.id)

            default:
                return state;
    }
};

export const store = createStore(reducer, initTodos, window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__());