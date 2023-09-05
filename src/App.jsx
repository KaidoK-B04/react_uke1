import { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList';
import myImage from './assets/Kfly.webp';


//Hook in react need to be on the top of the function!
//Hook cant be rendered conditionally (if (true) or loops or returns!

export default function App() {
//If our local value is null, then it returns an empty array.
//The useState is checking the localStorage and giving the value that exists. 
//If it dosn't then it gives a default just an empty array.
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue == null) return []
    return JSON.parse(localValue)
})

//Every time this arrow function is used or values changed, the tudos will be updated.
//Or in other words, every time todos change, we call this function. 
//And this function just taking our todo items and saves in local storage.!
useEffect(() => {
  localStorage.setItem('ITEMS', JSON.stringify(todos))
}, [todos])

function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos, 
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
}

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
    })
  }

  //CONTENT HTML + Components
  return (
    <>
    <div className='container' >
      <div class="profil-image">
        <img src={myImage} /> 
      </div>
    <h1 className='headertext'>Hva må gjøres idag?</h1>
    <NewTodoForm onSubmit={addTodo} />
    </div>
    <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    
    </>
  )
}

