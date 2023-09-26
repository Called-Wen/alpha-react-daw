import React, { useContext } from 'react';
import { useAppContext } from '../AppContext'; 

const ToDo = ({ todo, isAdmin }) => {
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
        {todo.quant ? (
          <p className="category" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>({todo.quant}) Livros</p>
        ) : (
          <p className="category" style={{ color: 'red', textDecoration: todo.isCompleted ? "line-through" : "" }}>Livro não disponível no momento</p>
        )}
        <p className="category">({todo.category})</p>
      </div>
      <div>
        {isAdmin && (
          <React.Fragment>
            <button className='complete' onClick={() => completeTodo(todo.id)}>Disponível</button>
            <button className='remove' onClick={() => removeToDo(todo.id)}>X</button>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}

export default ToDo;
