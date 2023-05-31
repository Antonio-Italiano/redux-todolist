import React, { useRef } from 'react';
import './App.css';
import {connect} from 'react-redux';
import {addTodo, deleteTodo} from './actions';

function App({addTodo, deleteTodo, todos}) { 

  const todoEl = useRef('');
  const manageClick = (e) => {
    e.preventDefault();
    addTodo(todos.length, todoEl.current.value);
  }


  return (
    <div className="App container-fluid">
      <div className='d-flex justify-content-center'>
        <div className='col-md-6 mt-5'>
          <h1>MY TODO LIST</h1>

          <ul className='list-group list-group-flush'>
            {
              todos.map( todo => <li key={todo.id} className='list-group-item'>{todo.name}
              <button onClick={() => deleteTodo(todo)} className='mx-1 btn btn-danger py-1 mb-1'>DELETE</button>
              </li>)
            }
          </ul>

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

const matchStateToProps = (state) => {
  return {todos: [...state]};
}

export default connect(matchStateToProps, {addTodo, deleteTodo})(App);
