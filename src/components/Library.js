import React, { Component } from 'react';

import Booklist from './Booklist'

const BOOKS_URL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"

export class Library extends Component {

  constructor(props) {
    super(props);

    // initialize the state
    this.state = {
      books : [],
    }
  }


  componentDidMount() {

    fetch(BOOKS_URL)
      .then(res => res.json())
      .then(data => this.setState({ books: data}))

  }

  render() {
    console.log(this.state.books);
    return (
      <div>
        <h1>Library Collection</h1>
        <Booklist books = {this.state.books} />
      </div>
    );
  }
}
