import React, { Component } from 'react';
import './booksearchList.css';


class BooksearchList extends Component {

  

  render() {
    
    const results = this.props.results.map((ele,key)=>{
      
      return(
      <li key={key}>
          <img src={"imageLinks" in ele.volumeInfo 
          ? ele.volumeInfo.imageLinks.smallThumbnail
          : ''} alt={ele.title} />
          <strong>{ele.volumeInfo.title}</strong>
          <p>{"authors" in ele.volumeInfo ? ele.volumeInfo.authors.map(i=><i>{i } </i>) : ''}</p>
          <p >{ele.volumeInfo.description}</p>
          <p >{"listPrice" in ele.saleInfo? ele.saleInfo.listPrice.amount:''}</p>
      </li>
      );
    });
    return (
      <div className="BooksearchList">
        <ul>
            {results}
        </ul>
      </div>
    );
  }
}


export default BooksearchList;