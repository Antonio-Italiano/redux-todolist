import React, { useRef } from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './features/todos/todosSlice';
import Todos from './features/Todos';

function App() { 

  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const todoEl = useRef('');
  const manageClick = (e) => {
    e.preventDefault();
    dispatch(addTodo({completed: false, id: todos.length, name: todoEl.current.value, dueDate: new Date().toLocaleDateString(), user_id: 1 }));
  }


  return (
    <div className="App container-fluid">
      <div className='d-flex justify-content-center'>
        <div className='col-md-6 mt-5'>
          <h1>MY TODO LIST</h1>

          <Todos todos={todos}/>

          <form className='mt-5'>
            <div className='form-group'>
              <input ref={todoEl} className='form-firld' name="todo" id='todo'/>
              <button onClick={manageClick} className='mx-1 btn btn-success py-1 mb-1'>ADD</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
