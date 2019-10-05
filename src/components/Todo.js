import React from 'react'
import TodoForm from './TodoForm'

export default function Todo({todo, index, addTodo}) {
    return (
        <div>
            <h4>{todo.name}</h4>
            { todo.todos.map(todo => {
               return <p>{todo.text}</p>
            }) }
            <div>
                <TodoForm category={todo.id}  addTodo={addTodo}/>
            </div>
        </div>
    )
}
