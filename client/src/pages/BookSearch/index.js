import React, { Component } from 'react';
import { BookCard } from '../shared/BookCard';
import { SearchBox } from './SearchBox';

const divStyle = {
    margin : '40px',
    border : '5px solid violet'
};

/**
 * TODO 
 * 1) Search books via Google Books API
 * 2) Render each book.
 *  2a) [View] button to browse on GB.
 *  2b) [Save] button to save info to db.
 * (optional) Maintain the state of the Search Page ONLY (SRP)
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
