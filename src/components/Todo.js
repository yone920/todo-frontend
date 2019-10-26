import React from 'react'

export default function Todo({singleTodo, deleteTodo}) {

    const handleClick = e => {
        deleteTodo(singleTodo.id)
    }

    
    return (
            <div className="todo__single-todo">
                <div className="todo__icon-box">
                    <svg viewBox="0 0 24 24" className="icon icon-checkmark"><path d="M5 2c-1.654 0-3 1.346-3 3v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-14c0-1.654-1.346-3-3-3h-14zm19 3v14c0 2.761-2.238 5-5 5h-14c-2.762 0-5-2.239-5-5v-14c0-2.761 2.238-5 5-5h14c2.762 0 5 2.239 5 5z"/></svg>
                </div>
                <div className="todo__name" ><p>{singleTodo.text}</p></div>
                <div className="todo__delete-button" onClick={handleClick}>                        
                    <svg viewBox="0 0 32 32" class="icon icon-clear" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"/>
                    </svg>
                </div>
            </div>
    )
}
