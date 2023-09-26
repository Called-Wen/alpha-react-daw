// Profile.js

import React, { useContext } from 'react';
import { LoginContext } from '../context/LoginContext.js'
import Navbar from './Navbar.js';
import "../TodoList.css";
import ToDo from '../components/ToDo';
import ToDoForm from '../components/ToDoForm';
import SearchTodo from '../components/SearchTodo';
import Filter from '../components/Filter';
import { useAppContext } from '../AppContext'; 


function Profile() {

const { isLoggedIn, isAdmin } = useContext(LoginContext);
 console.log('isLoggedIn', isLoggedIn);


const { state, dispatch } = useAppContext();
const { todos, search, filter, sort } = state;

const addToDo = (text, category) => {
  const newTodo = {
    id: Math.floor(Math.random() * 10000),
    text,
    category,
    isCompleted: false,
  };

  dispatch({ type: 'ADD_TODO', payload: newTodo }); 
};

const removeToDo = (id) => {
  dispatch({ type: 'REMOVE_TODO', payload: id }); 
};

const completeTodo = (id) => {
  dispatch({ type: 'TOGGLE_TODO', payload: id }); 
};

return (
  <div className="app">
    <Navbar>
      
    </Navbar>
    <h1>Lista de Livros</h1>
    <SearchTodo />
    <Filter />
    <div className="todo_list">
      {state.todos
        .filter(todo => (
          filter === "All" ? true : 
          filter === "Completed" ? todo.isCompleted : !todo.isCompleted
        ))
        .filter(todo => 
          todo.text.toLowerCase().includes(state.search.toLowerCase())
        )
        .sort((a, b) => (
          state.sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text)
        ))
        .map(todo => (
          <ToDo 
            key={todo.id} 
            todo={todo} 
            removeToDo={removeToDo} 
            completeTodo={completeTodo}
            isAdmin={isAdmin}
          />
        ))
      }
    </div>
    {isAdmin && <ToDoForm addToDo={addToDo} />} {/* Renderiza o ToDoForm somente se for admin */}
  </div>
);

}

export default Profile;
