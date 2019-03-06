import React, { Component } from 'react'
// import BookList from './BookList';
import BookCard from '../BookCard';

//Contains the render logic for a list of books.
export default class BookView extends Component {

    render() {
        const {books, removeBook, viewBook} = this.props;
        return (
            <div>
                {books && <h3>Books found:</h3>}
                {books.map(book => {
                        const {id} = book;
                        return(
                        <BookCard                                     
                            key={id}
                            id={id}
                            viewBook={viewBook}
                            removeBook={removeBook} 
                            {...book} 
                            />)
                    })
                }
            </div>            
        )
  }
}