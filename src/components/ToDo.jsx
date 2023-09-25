import React, { useContext } from 'react';
import { useAppContext } from '../AppContext'; 

const ToDo = ({ todo }) => {
  const { state, dispatch } = useAppContext(); 

  const completeTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id }); 
  }

  const removeToDo = (id) => {
    dispatch({ type: 'REMOVE_TODO', payload: id }); 
  }

  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className='complete' onClick={() => completeTodo(todo.id)}>Completar</button>
        <button className='remove' onClick={() => removeToDo(todo.id)}>X</button>
      </div>
    </div>
  )
}

export default ToDo;
