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
 * TODO:
 * 1) Render all saved books.
 * 2) [View] takes user to GB book.
 * 3) [Delete] btn removes from db.
 */

export class Saved extends Component {
  render() {
    return (
      <div style={divStyle}>
        <p style={pStyle}>Saved</p>
      </div>
    )
  }
}

export default Saved
