import React, { Fragment } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

export default function Category({todo, index, addTodo, deleteTodo, deleteCategory}) {


    const mapOverTodos = () => {
           return todo.todos.map((singleTodo) => {
                return <Todo singleTodo={singleTodo} deleteTodo={deleteTodo} />
            }) 
    }

    const handleClick = e => {
        deleteCategory(todo.id)
    }

    return (
        <Fragment>
            <div className="category">
                <div className="category__header">
                    <div className="category__name">
                        <h4>{todo.name}</h4>
                    </div>
                    <div className="category__delete" onClick={handleClick}>
                        <svg viewBox="0 0 32 32" class="icon icon-clear" viewBox="0 0 32 32" aria-hidden="true"><path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"/></svg>
                    </div>
                    <div className="category__svg">
                        <svg viewBox="0 0 32 32" class="icon icon-apps" viewBox="0 0 32 32" aria-hidden="true"><path d="M6 11h5V6H6v5zm7.5 15h5v-5h-5v5zM6 26h5v-5H6v5zm0-7.5h5v-5H6v5zm7.5 0h5v-5h-5v5zM21 6v5h5V6h-5zm-7.5 5h5V6h-5v5zm7.5 7.5h5v-5h-5v5zm0 7.5h5v-5h-5v5z"/></svg>
                        <svg viewBox="0 0 32 32" class="icon icon-chevron-bottom" viewBox="0 0 32 32" aria-hidden="true"><path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z"/></svg>
                    </div>
                </div>
                <div className="todo">
                    {mapOverTodos()}
                </div>
                <div className="category__new-form">
                    <TodoForm category={todo.id}  addTodo={addTodo}/>
                </div>
            </div>
        </Fragment>
    )
}