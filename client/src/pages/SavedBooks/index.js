import React, { Component } from 'react';
import API  from '../../utils/API'
import {Link} from 'react-router-dom'

const pStyle = {    
    color : 'orange',
    backgroundColor : 'blue',
    margin : '15px',
    textAlign: 'center'    
};

const divStyle = {
    margin: '40px',
    border: '5px solid pink'
};

/**
 * TODO: (pseudocode)
 * 1) Render all saved books by passing their json as props into a individual BookCard instances (use map()).
 * 2) [View] btn takes user to GB book.
 * 3) [Delete] btn removes from db.
 */

export default class Saved extends Component {

    state = {
        searchText: ""
    }

    componentDidMount(){
        this.loadBooks();
    }

    viewBook = id => {
        // Pseudocode:
        // 1. use request module to send the user to the book's URL on Google.
        // This will take the user to a new tab in their browser.
    }

    loadBooks = () => {
        API.getBooks()
        .then(res=> this.setState({ 
            books: res.data, 
            title: "", 
            author: "", 
            synopsis: ""}))
        // .then(res=>console.log(res))
        .catch(err => console.log(err));
    }    

    removeBook = id => {
        console.log('before: ', this.state.books, 'id: ', id);
        const remaining = this.state.books.filter(book=>book._id!==id);
        console.log('remaining: ', remaining)
        this.setState({books: remaining});

        this.deleteBook(id);
    }

    //TODO: (psuedocode) Run this on the id of a book whose [Delete] btn was clicked.
    deleteBook = id => {
        API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    };    

  render() {
    return (
      <div style={divStyle}>
        <Link to="/Search">Search for Books</Link>
        <p style={pStyle}>Saved</p>
      </div>
    )
  }
}