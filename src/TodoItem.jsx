import { useState } from "react";
import './TodoItem.css';

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
  <li>
  <label>
    <input 
    type='checkbox' 
    className='checkradio'
    checked={completed}
    onChange={e => toggleTodo(id, e.target.checked)}
    />
    <span className="todo-title">{title}</span>
  </label>
  <button onClick={() => deleteTodo(id)} className='btn-delete'>
    <i class="fa fa-minus-square-o"></i>
  </button>
</li>
  )
}