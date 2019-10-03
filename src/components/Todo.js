import React from 'react'

export default function Todo({todo, index}) {
    // console.log(todo)
    // debugger
    return (
        <div>
            <h4>{todo.name}</h4>
            { todo.todos.map(todo => {
               return <p>{todo.text}</p>
            }) }
        </div>
    )
}
