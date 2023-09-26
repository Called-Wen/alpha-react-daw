import React, { useContext, useState } from 'react';
import { useAppContext } from '../AppContext'; 

const ToDoForm = () => {
  const { state, dispatch } = useAppContext();

  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;

    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text: value,
      category,
      isCompleted: false,
    };

    dispatch({ type: 'ADD_TODO', payload: newTodo }); 

    setCategory("");
    setValue("");
    console.log(value, category);
  }

  return (
    <div className="todo-form">
      <h2>Registrar Livro:</h2>
      <form onSubmit={handleSubmit}>
        <div className="margin">
          <input type="text" placeholder="Digite o Título" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>

        <div className="margin">
        <span className="input-group-text">Quantidade:</span>
  <input
    type="number"
    className="form-control"
    min="1"
    max="90"
    placeholder="Digite um número de 1 a 90"
    aria-label="Número"
    aria-describedby="basic-addon2"
  /></div>

        <div className="margin">
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione uma Categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Escola">Escola</option>
          </select>
        </div>
        <button type="submit">Registrar Livro</button>
      </form>
    </div>
  );
};

export default ToDoForm;
