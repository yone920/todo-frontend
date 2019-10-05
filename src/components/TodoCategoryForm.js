import React, { useState } from 'react';


export default function TodoCategoryForm({ addCategory }) {

   const [value, setValue] = useState("");

   const handleSubmit = e => {
        e.preventDefault()
        if (!value) return;
        addCategory({name: value});
        setValue('');
   }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)} placeholder="Category..."></input>
            </form>
        </div>
    )
}
