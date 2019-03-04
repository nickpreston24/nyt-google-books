import React, { Component } from 'react';

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

export class Saved extends Component {

    viewBook = id => {

        // Pseudocode:
        // 1. use request module to send the user to the book's URL on Google.
        // This will take the user to a new tab in their browser.
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
        <p style={pStyle}>Saved</p>
      </div>
    )
  }
}

export default Saved
