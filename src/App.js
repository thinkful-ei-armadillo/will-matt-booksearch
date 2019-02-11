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
    };
  }

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=tacos';
    fetch(url) 
      .then(res => { 
        if(!res.ok) { 
          throw new Error('Something went wrong, please try again later.');
        }
        return res; 
      })
      .then(res => res.json()) 
      .then(data => {
        console.log(data);
        // this.setState({
        //   error: null 
        // });
      })
      .catch(err => { 
        this.setState({
          error: err.message 
        });
      });
  }
  

  render() {
  
    return (
      <div className="App">
      <h1>Bookmark Search</h1>
        <SearchBar />
        <PrintType />
        <BookType />
        <BooksearchList />
      </div>
    );
  }
}

// search bar
// book type filter
// print type filter
// book search list results




export default App;