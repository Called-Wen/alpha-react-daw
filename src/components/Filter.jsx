import React, { useContext } from 'react';
import { useAppContext } from '../AppContext'; 

const Filter = () => {
  const { state, dispatch } = useAppContext(); 

  const { filter } = state; 

  const setFilter = (value) => {
    dispatch({ type: 'SET_FILTER', payload: value });
  };

  const setSort = (value) => {
    dispatch({ type: 'SET_SORT', payload: value }); 
  };

  return (
    <div className='filter'>
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status: </p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <p>Ordem Alfabética:</p>
        <button onClick={() => setSort("Asc")}>Asc</button>
        <button onClick={() => setSort("Desc")}>Desc</button>
      </div>
    </div>
  );
}

export default Filter;
