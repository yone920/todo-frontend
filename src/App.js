import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoCategoryForm from './components/TodoCategoryForm';

const App = () => {

const [hasError, setErrors] = useState(false);
const [ todos, setTodos ] = useState([]);

useEffect(() => {
      fetch("http://localhost:3000/categories")
        .then( res =>  res.json())
        .then(data => {
            setTodos(data)
        })  
        .catch(err => setErrors(err));
}, [])
      

const addCategory = name => {
    let config = {
      method: "POST",
      headers: {
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(name)
    }
    fetch("http://localhost:3000/categories", config)
      .then(rsp => rsp.json())
      .then(data => {
        
         setTodos(data)
      })
}

const addTodo = data => {
  let config = {
    method: "POST",
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch("http://localhost:3000/todos", config)
    .then(rsp => rsp.json())
    .then(data => {
       setTodos(data)
    })
}

const mapOverTodos = () => {
  if (todos.length > -1) {
    return (
           todos.map((todo, index) => (
              <Todo key={index} index={index} todo={todo} addTodo={addTodo}/>
          )) 
      
    )
  } else {
    return "Loading ...."
  }
}


  return (
    <div className="App">
      <div className="App-header">
        <div>    
          ToDo List
        </div>
        <div>
          {mapOverTodos()}
        </div>
        <div>
          <h3>Create Category</h3>
          <TodoCategoryForm  addCategory={addCategory}/>
        </div>
      
      </div>
    </div>
  );
}

export default App;






