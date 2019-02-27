import React, { Component } from 'react';
import { BookCard } from './BookCard';
import { SearchBox } from './SearchBox';

export const pStyle = {
    color: 'limegreen',
    backgroundColor:'purple',
    textAlign : 'center',
    // width : '50%',
    lineHeight: '100px'
};

const divStyle = {    
    margin : '40px',
    border : '5px solid violet'
};

export const sbStyle = { 
    // color: 'limegreen',
    // fontFamily: 'Comic Sans',
    // backgroundColor: 'purple'
    border :'3px solid darkred'
};

/**
 * TODO 
 * Maintain the state of the Search Page ONLY (SRP)
 */

export class Search extends Component {
  render() {
    return (
      <div style={divStyle}>
        {/* <p style={pStyle}>Search Box</p> */}
        <SearchBox/>
        <br/>
        <BookCard name='Book 1'/>
        <BookCard name='Book 2'/>
      </div>
    )
  }
}

export default Search
