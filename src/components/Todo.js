import React, { useState } from 'react';

export default function Todo({singleTodo, deleteTodo, markedOrNot}) {

    const [checked, setChecked] = useState(false)

    
    const handleClick = e => {
        deleteTodo(singleTodo.id)
    }
    
    const handleCheck = e => {
        setChecked(!checked);
        markedOrNot(singleTodo);
    }
    
    const markCheked = () => {
        if (singleTodo.completed) {
            return "todo__checked"
        }

    }
    
    
    return (
            <div className="todo__single-todo">
                <div className="todo__icon-box">
                    <input type="checkbox" onChange={handleCheck} name="todo-checkbox" className="todo__checkbox" id=""/>
                </div>
                <div className={`todo__name ${markCheked()}`} ><p>{singleTodo.text}</p></div>
                <div className="todo__delete-button" onClick={handleClick}>                        
                    <svg viewBox="0 0 32 32" className="icon icon-clear" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M7.004 23.087l7.08-7.081-7.07-7.071L8.929 7.02l7.067 7.069L23.084 7l1.912 1.913-7.089 7.093 7.075 7.077-1.912 1.913-7.074-7.073L8.917 25z"/>
                    </svg>
                </div>
            </div>
    )
}
