import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

const App = () => {

const [ todos, setTodos ] = useState([]);


  useEffect(() => {
    fetch('http://localhost:3000/categories')
      .then(res => res.json())
      .then(data => {
          console.log(data)
      })
  }, []);
 

const addTodo = text => {
  const NewTodo = [ ...todos, { text }]
  setTodos(NewTodo)
}



  return (
    <div className="App">
      <div className="App-header">
        <div>    
          ToDo List
        </div>
        <div>
            {/* { todos.map((todo, index) => (
                <Todo key={index} index={index} todo={todo} />
            )) } */}
        </div>
       
        <div>
          <TodoForm  addTodo={addTodo}/>
        </div>
      
      </div>
    </div>
  );
}

export default App;






