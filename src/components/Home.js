import React, { useState, useEffect } from 'react';
import '../stylesheets/home.scss';
import Category from './Category';
import TodoCategoryForm from './TodoCategoryForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Home = () => {

const [hasError, setErrors] = useState(false);
const [ todos, setTodos ] = useState([]);

useEffect(() => {
      fetch("https://todo-yone-backend.herokuapp.com/categories")
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
    fetch("https://todo-yone-backend.herokuapp.com/categories", config)
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
  fetch("https://todo-yone-backend.herokuapp.com/todos", config)
    .then(rsp => rsp.json())
    .then(data => {
       setTodos(data)
    })
}

const deleteTodo = todo => {
  let config = {
    method: "DELETE",
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
  }

  fetch(`https://todo-yone-backend.herokuapp.com/todos/${todo}`, config)
    .then(rsp => rsp.json())
    .then(data => {
       setTodos(data)
    })
}

const deleteCategory = category => {
  let config = {
    method: "DELETE",
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
  }

  fetch(`https://todo-yone-backend.herokuapp.com/categories/${category}`, config)
    .then(rsp => rsp.json())
    .then(data => {
       setTodos(data)
    })
}


const mapOverTodos = () => {
  if (todos.length > -1) {
    return (
           todos.map((todo, index) => (
              <Category key={index} index={index} todo={todo} addTodo={addTodo} deleteTodo={deleteTodo} deleteCategory={deleteCategory} />
          )) 
      
    )
  } 
}



  return (
    <div className="wrapper">
        <div className="header-logo">
            <h1 className="logo-div">
            <span className="main-logo">ToDo List</span>
            <span className="sub-logo">Get Organized</span>
            </h1>
        </div>    
        <div className="header-menu">
          <span>Login</span>
          <span>SignUp</span>
          <span>SignOut</span>
        </div>
        <div className="create-category-button">
            <button type="button" className="add-category"><FontAwesomeIcon  icon="plus"></FontAwesomeIcon></button> 
            <TodoCategoryForm  addCategory={addCategory} />
         </div>
        <main id="main">
            <section id="section-a" className="container">
            {mapOverTodos()}
            </section>
        </main>
        <footer id="main-footer">
            <p>yonedesign</p>
        </footer>
    </div>
  );
}

export default Home;