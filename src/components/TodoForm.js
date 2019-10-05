import React, { useState } from 'react'

export default function TodoForm({ category, addTodo  }) {
    const [ value,  setValue ] = useState('');

    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return;
        addTodo({text: value, 
                        category_id: category});
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
