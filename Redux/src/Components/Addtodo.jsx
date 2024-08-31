import React, { useState } from 'react'

export const Addtodo = () => {
    const [todo, setTodo] = useState({
        title: '',
        description: ''
    });
    const handleSubmit=(e)=>{
        e.prevenDefault()
        console.log(todo)
    }
    return (
        <div className='Appa'>
            <h1>Add Todo Here!!!</h1>

            <form action="" onSubmit={handleSubmit}>
                <label>Add title</label>
                <input
                    type="text"
                    placeholder='Title'
                    value={todo.title}
                    onChange={e => setTodo({ ...todo, title: e.target.value })}
                />
                <label>Add Description</label>
                <textarea
                    name=""
                    id=""
                    placeholder='Description'
                    value={todo.description}
                    onChange={e => setTodo({ ...todo, description: e.target.value })}
                />
            </form>
            <button className='btn'>Add</button>
        </div>
    );
}
