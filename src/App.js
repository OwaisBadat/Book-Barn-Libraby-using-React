import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Booklist from './components/Booklist'

const BOOKS_URL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json"

class App extends Component {

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
        <Booklist books = {this.state.books} />
      </div>
    );
  }
}

export default App;
