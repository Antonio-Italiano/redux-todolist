import React, { useEffect, useState } from 'react';
import './App.css';

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

function App() {

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(initTodos);
  
    return () => {
    }
  }, [todos])
  
  return (
    <div className="App container-fluid">
      <h1>MY TODO LIST</h1>

      <ul className='list-group list-group-flush'>
        {
          todos.map( todo => <li key={todo.id} className='list-group-item'>{todo.name}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
