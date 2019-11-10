import React, { useState, useEffect, Fragment } from 'react';
import Category from './Category';
import TodoCategoryForm from './TodoCategoryForm';


const Home = () => {

const [hasError, setErrors] = useState(false);
const [ todos, setTodos ] = useState([]);
const [popup, setPopup] = useState(false);


var http = require("http");
setInterval(function() {
    http.get("http://localhost:3000/");
}, 300000); // every 5 minutes (300000)


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

const markedOrNot = (todo) => {
  console.log(todo);
  let config = {
    method: "PATCH",
    headers: {
    'Content-Type':'application/json',
    'Accept':'application/json'
    },
    body: JSON.stringify({completed: !todo.completed })
}

fetch(`http://localhost:3000/todos/${todo.id}`, config)
.then(rsp => rsp.json())
.then(data => {
    console.log(data);
    
    setTodos(data)
}) 

}

const displayFormPopup = () => {
  if (popup) {
    return (
            <div className="popup" id="popup">
                  <div className="popup__content">
                    <div className="popup__header">
                      <h3>Create A Category</h3>
                    </div>
                    <a href="#home-page" className="popup__close" onClick={handleClickClose}>
                      <svg viewBox="0 0 32 32" className="icon icon-clear" viewBox="0 0 32 32" aria-hidden="true">
                            <path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"/>
                      </svg>
                    </a>
                    <div className="popup__create-category-box">
                      <TodoCategoryForm  addCategory={addCategory} changePopup={changePopup}/>
                    </div>
                  </div>
                </div>
    )
  }
}

const handleClick = e => {
  setPopup(!popup);
}

const handleClickClose = e => {
  setPopup(!popup);
}

const changePopup = () => {
  setPopup(!popup);
}

const mapOverTodos = () => {
  if (todos.length > -1) {
    return (
           todos.map((todo, index) => (
              <Category key={index} index={index} todo={todo} addTodo={addTodo} deleteTodo={deleteTodo} deleteCategory={deleteCategory} markedOrNot={markedOrNot} />
          )) 
      
    )
  } 
}





  return (
    <Fragment>
      <div className="wrapper">
        <div className="home" id="home-page">
              <div className="header">
                <div className="header__logo-box">
                  
                  <img src="img/my-todo-logo-2.png"></img>
                </div>
                {/* <div className="header__menu">
                  <span>Login</span>
                  <span>SignUp</span>
                  <span>SignOut</span>
                </div> */}
                {/* <div className="mobile-nav">
                  <input type="checkbox" className="mobile-nav__checkbox" id="navi-toggle"></input>
                  <label htmlFor="navi-toggle" className="mobile-nav__button"></label>
                  <div className="mobile-nav__background">&nbsp;</div>
                  <nav className="mobile-nav__nav">
                    <ul className="mobile-nav__list">
                      <li className="mobile-nav__item"><a href="#" className="mobile-nav__link">Login</a></li>
                      <li className="mobile-nav__item"><a href="#" className="mobile-nav__link">SignUp</a></li>
                      <li className="mobile-nav__item"><a href="#" className="mobile-nav__link">Logout</a></li>
                    </ul>
                  </nav>
                </div> */}
              </div>  
              <a href="#popup" className="home__create-category-button" onClick={handleClick}>
                <svg className="icon icon-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                  <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
                </svg>
              </a>
              <div className="categories">
                  {mapOverTodos()}
              </div> 
          
              {displayFormPopup()}
      </div>
    </div>

      <footer className="footer">
          <p>@yonedesign</p>
      </footer> 
    </Fragment>
  );
}

export default Home;