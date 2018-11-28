import React, { Component } from 'react';
import './Booklist.css'
const IMG_URL = 'https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/'


class Booklist extends Component {


  render() {
    let bookItem = this.props.books.map(function(book,index){
      return <li key={index}>
        <img className='bookImg' style={{ width: "80%", height: "75%" }} src={`${IMG_URL}${book.imageLink}`}/>
        <h4>{book.title}</h4>
        <label>{book.author}</label>
        <p>{book.year}</p>
      </li>
    })

    return (
      <ul>{bookItem}</ul>
    )
  }
}

export default Booklist
