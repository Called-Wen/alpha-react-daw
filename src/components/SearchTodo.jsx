

const SearchTodo = ({ search, setSearch }) => {
  return (
    <div className="search">
      <h2>Pesquisar</h2>
      <input className="margin" type="text" 
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Digite para pesquisar..."
      />
    </div>
  )
}

export default SearchTodo;