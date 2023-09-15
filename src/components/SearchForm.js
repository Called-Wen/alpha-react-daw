


function SearchForm(){
    return(
        <form onClick="submit" className="d-flex" role="search" >
            <input className="form-control me-2" type="search" placeholder="Pesquisa" aria-label="Search"/>

            <button className="btn btn-outline-success" type="submit">
                Pesquisa
            </button>
        </form>
    )

}


export default SearchForm;