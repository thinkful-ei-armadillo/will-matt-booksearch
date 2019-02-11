import React, { Component } from 'react';
import BooksearchList from './booksearchList/booksearchList';
import BookType from './booktype/booktype';
import PrintType from './printtype/printtype';
import SearchBar from './searchBar/Searchbar';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      search: '',
      filter: '',
      type: null,
      error: null 
    };
  }

  getSearch(term){
    this.setState({
      search : term
    });
  }

  getFilter(filter){
    this.setState({
      filter: filter
    });
  }

  
  getType(type){
    this.setState({
      type: type
    });
  }

  getData(data){
    this.setState({
      results: data.items
    });
  }

 getError(err){
   this.setState({
     error: err
   })
 }


 
  render() {
  
    return (
      <div className="App">
      <h1>Bookmark Search</h1>
        <SearchBar  
        getSearch={(term)=>this.getSearch(term)}
        getData={(data) => this.getData(data)}
        />
        
        <PrintType 
        getFilter = {filter => this.getFilter(filter)}
        search = {this.state.search}
        getType = {type => this.getType(type)}
        getData={(data) => this.getData(data)}
        />

        <BookType  
        getType = {filter => this.getType(filter)} 
        getFilter = {(filter) => this.getFilter(filter)}
        search = {this.state.search}
        getData={(data) => this.getData(data)}
        getError = {(err)=>this.getError(err)}
        />
        <BooksearchList 
          results={this.state.results}
        />
      </div>
    );
  }
}

// search bar
// book type filter
// print type filter
// book search list results




export default App;