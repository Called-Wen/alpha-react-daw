import React, { useContext } from 'react';
import { useAppContext } from '../AppContext'; 

const SearchTodo = () => {
  const { state, dispatch } = useAppContext(); 

  const setSearch = (value) => {
    dispatch({ type: 'SET_SEARCH', payload: value }); 
  }
  return (
    <div className="search">
      <h2>Pesquisar</h2>
      <input
        className="margin"
        type="text"
        value={state.search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Digite para pesquisar..."
      />
    </div>
  )

}

export default SearchTodo;
