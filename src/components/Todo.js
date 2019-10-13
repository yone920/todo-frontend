import React from 'react'

export default function Todo({singleTodo, deleteTodo}) {

    const handleClick = e => {
        deleteTodo(singleTodo.id)
    }

    
    return (
        <div className="single-todo">
            <div className="single-todo-name" ><p>{singleTodo.text}</p></div>
            <div className="single-todo-delete-button" onClick={handleClick}><button>x</button></div>
        </div>
    )
}
