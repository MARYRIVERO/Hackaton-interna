import React from 'react';



const Search = ({search, setSearch, searching}) => {
  const click = (e) => {
    searching(e, search, setSearch);
  };
  
    return (
      <div>
          <h5 className="mt-2"> ¿Qué buscas?</h5>
          <input type="text" className="form-control search-input" placeholder="Escribe nombre del producto" 
          onKeyUp={click} ></input>
      </div>
    )
}

export default Search;
