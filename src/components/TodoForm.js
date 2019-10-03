import React, { useState } from 'react'

export default function TodoForm({ addTodo }) {
    const [ value,  setValue ] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return;
        addTodo(value);
        setValue('');
    }

    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Todo..."></input>
            </form>
        </div>
    )
}
