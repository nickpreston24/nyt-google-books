import React, { Component } from 'react'

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
