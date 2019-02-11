import React, { Component } from 'react';
import './booksearchList.css';


class BooksearchList extends Component {
  render() {
    return (
      <div className="BooksearchList">
        <ul>
            <li>Banana</li>
            <li>Potato</li>
            <li>Cat</li>
        </ul>
      </div>
    );
  }
}


export default BooksearchList;