import { useState } from "react";
import './NewTodoForm.css';

export function NewTodoForm({onSubmit}) {
  const [newItem, setNewItem] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === '') return
  
    onSubmit(newItem)

    setNewItem('')
  } 

  return (
    <form onSubmit={handleSubmit} className='newItemForm'>
      <div className='form-row'>
        {/* <label htmlFor='item'>New Item</label> */}
        <input value={newItem} onChange={e => setNewItem(e.target.value)} 
        type='text' 
        id='item'
        placeholder='Ny oppgave' 
        />
      </div>
      <button className='btn'>
        <i class="fa fa-plus-square-o"></i>
      </button>
    </form>
  )
}