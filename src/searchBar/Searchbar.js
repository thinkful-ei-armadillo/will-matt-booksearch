import React from 'react';


function SearchBar(props) {
    return (
        <form className='searchBar_form' onSubmit={e => props.handleSubmit(e)}>
            <label>Search: </label>
            <input type='text' name='search' id='searchBar' placeholder='taco' value={props.booksearch} />
        </form>
    )
}

export default SearchBar;