import { useState } from "react";

import "../TodoList.css";
import ToDo from "../components/ToDo";
import ToDoForm  from "../components/ToDoForm";
import SearchTodo from "../components/SearchTodo";
import Filter from "../components/Filter";

function ToDoList() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no Sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    { id: 2, 
      text: "Matar Aula", 
      category: "Escola", 
      isCompleted: false },
    { id: 3, 
      text: "Preparar o Almoço", 
      category: "Casa", 
      isCompleted: true },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  const addToDo = (text, category) => {
    const newTodos = [
      ...todos, 
      {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    },
    ];
    setTodos(newTodos);
  };

  const removeToDo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => 
      todo.id !==id? todo : null)
      setTodos(filteredTodos);

  };

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => 
    todo.id === id ? (todo.isCompleted = !todo.isCompleted) : todo);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <SearchTodo search={search} setSearch={setSearch}/>
      <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>
      <div className="todo_list">
        {todos.filter((todo) => filter === "All" 
        ? true 
        : filter === "Completed" 
        ? todo.isCompleted 
        : !todo.isCompleted )
        .filter((todo) => 
        todo.text.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
        .map((todo) => (
          <ToDo key={todo.id} todo={todo} removeToDo= {removeToDo} completeTodo={completeTodo}/>
        ))}
      </div>
      <ToDoForm addToDo={addToDo}/>
    </div>
  );
}

export default ToDoList;
