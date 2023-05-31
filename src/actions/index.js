export const addTodo = (id,name) => {    
    
    const newTodo = {
      id: id++,
      name: name, 
      dueDate: new Date().toLocaleDateString(),
      user_id: 1,
  }

    return ({type:'ADD_TODO', payload:newTodo})
};

export const deleteTodo = todo => {    

    return ({type:'DELETE_TODO', payload: todo})
};