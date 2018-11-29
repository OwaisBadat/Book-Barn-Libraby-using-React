import React, { Component } from 'react';
import './AddToMyLibrary.css'

const ADD_BOOK_URL = "http://localhost:3001/api/add-book"

export class AddBook extends Component {

  constructor(props){
    super(props)

    this.state = {
      book: {}
    }


  }

  submitBookClick = () => {

  let book = this.state.book

    fetch(ADD_BOOK_URL,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    }).then((response) => {
      return response.json()
    }).then((json) => {
      this.props.history.push('/')
    })
  }



  handleTextBoxOnChange = (e) => {

    console.log(e.target.name)
    console.log(e.target.value)

    this.setState({
      book : {
        ...this.state.book,
        [e.target.name] : e.target.value
      }
    })

  }

  render() {
    return(
      <div>
        <h1>Add a Book For Later Reading</h1>
        <div className="addbook">
          <input type="text" name= "title" placeholder="Title" onChange={this.handleTextBoxOnChange} />
          <input type="text" name= "publisher" placeholder="Publisher" onChange={this.handleTextBoxOnChange} />
          <input type="text" name= "year" placeholder="Year" onChange={this.handleTextBoxOnChange} />
          <input type="text" name= "image" placeholder="Image URL" onChange={this.handleTextBoxOnChange} />
          <select name="genre" className="dropdown" onChange={this.handleTextBoxOnChange}>
            <option value="fantast">Fantasy</option>
            <option value="fiction">Fiction</option>
            <option value="non-fiction">Non-Fiction</option>
            <option value="romance">Romance</option>
            <option value="biograpghy">Biography</option>
          </select>
          <button className="button" onClick={this.handleAddBookButtonClick}>Add Book</button>
        </div>
      </div>
    )
  }
}
