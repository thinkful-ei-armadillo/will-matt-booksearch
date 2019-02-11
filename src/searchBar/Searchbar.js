import React, { Component } from 'react';



class SearchBar extends Component {
    render () {
        return (
        <form className='searchBar_form' onSubmit={e => this.props.handleSubmit(e)}>
            <label>Search: </label>
            <input type='text' name='search' id='searchBar' placeholder='taco' defaultValue={this.props.search}/>
            <button type='submit'>Search</button>
        </form>
        )
    }
}

// value={props.search}

export default SearchBar;