import React, { useState, useEffect } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const App = () => {

const [hasError, setErrors] = useState(false);
const [ todos, setTodos ] = useState([]);

 
    useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/categories");
      res
        .json()
        .then(res => setTodos(res))
        .catch(err => setErrors(err));
    }

    fetchData();
  });


const addTodo = text => {
  const NewTodo = [ ...todos, { text }]
  setTodos(NewTodo)
}


// debugger
  return (
    <div className="App">
      <div className="App-header">
        <div>    
          ToDo List
        </div>
        <div>
            { todos.map((todo, index) => (
                <Todo key={index} index={index} todo={todo} />
            )) }
        </div>
       
        <div>
          <TodoForm  addTodo={addTodo}/>
        </div>
      
      </div>
    </div>
  );
}

export default App;






