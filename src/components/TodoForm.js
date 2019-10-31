import React, { useState, Fragment } from 'react'

export default function TodoForm({ category, addTodo  }) {
    const [ value,  setValue ] = useState('');
    const [form, setForm] = useState(false);

    const handleSubmit = e => {
        e.preventDefault()
        if (!value) return;
        addTodo({text: value, 
                        category_id: category});
        setValue('');
        setForm(!form);
    }

    
    const todoForm = () => {
        if (form) {
            return (
                <form className="todo-submit" id="todo-submit" name="nfetene" onSubmit={handleSubmit}>
                    <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Todo..."></input>
                    {/* <input type="submit" className="todo-add"/> */}
                </form>
            )
        }
    }

    const handleClick = e => {
        setForm(!form);
    }
    

    return (
        <Fragment>
            <a href="#todo-submit" onClick={handleClick} htmlFor="nfetene">
                <svg className="icon icon-plus" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/>
                </svg>
            </a>
            {todoForm()}
        </Fragment>
    )
}
