import React, { useState, useEffect } from 'react';
import Category from './Category';
import TodoCategoryForm from './TodoCategoryForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Home = () => {

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

const deleteTodo = todo => {
  let config = {
    method: "DELETE",
    headers: {
      'Content-Type':'application/json',
      'Accept':'application/json'
    }
  }

  fetch(`http://localhost:3000/todos/${todo}`, config)
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

  fetch(`http://localhost:3000/categories/${category}`, config)
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
    <div className="home" id="home-page">
          <div className="header">
              <h1 className="header__logo-box">
                <span className="header__logo-span">ToDo List</span>
                <span className="header__sub-span">Get Organized</span>
              </h1>
              <div className="header__menu">
                <span>Login</span>
                <span>SignUp</span>
                <span>SignOut</span>
              </div>
          </div>  
          <a href="#popup" className="home__create-category-button">
            {/* <div className="home__create-category-button"> */}
                <svg className="icon icon-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
            {/* </div> */}
          </a>
          <div className="categories">
              {mapOverTodos()}
          </div>
          <footer id="footer">
              <p>yonedesign</p>
          </footer>

          <div className="popup" id="popup">
            <div className="popup__content">
              <div className="popup">
                <h3>Create A Category</h3>
              </div>
              <div className="popup__create-category-box">
                <TodoCategoryForm  addCategory={addCategory} />
              </div>
              <a href="#home-page" className="popup__close">
                <svg viewBox="0 0 32 32" class="icon icon-clear" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"/>
                </svg>
              </a>
            </div>
          </div>
    </div>
  );
}

export default Home;