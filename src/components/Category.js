import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

export default function Category({todo, index, addTodo, deleteTodo, deleteCategory}) {


    const mapOverTodos = () => {
           return todo.todos.map((singleTodo) => {
                return  <Todo singleTodo={singleTodo} deleteTodo={deleteTodo} />
            }) 
    }

    const handleClick = e => {
        deleteCategory(todo.id)
    }

    return (
        <div className="category-list">
            <div className="category-name-button">
                <div className="category-name">
                    <h4>{todo.name}</h4>
                </div>
                <div className="category-delete-button" onClick={handleClick}>
                    <button>x</button>
                </div>
            </div>
        <div className="todo-list">
            {mapOverTodos()}
        </div>
            <div>
                <TodoForm category={todo.id}  addTodo={addTodo}/>
            </div>
        </div>
    )
}
