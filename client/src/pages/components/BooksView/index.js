import React, { Component } from 'react'
import BookCard from '../BookCard';

//Contains the render logic for a list of books.
export default class BooksView extends Component {
    
    handleClick = event => {
        //handle either button:
        const { books, saveBook, viewBook } = this.props;
        const { action, id } = event;
        let book = books.find(b => b.id === id);
        // console.log('action: ', action.trim());

        switch(action.trim())
        {
            case 'view':
                viewBook(book);
                break;
            case 'save':
                saveBook(book);
                break;
            default:
                console.log(!action ? 'No specified button action' : `No button action found for '${action}'`);
                break;
        }
    }

    render() {        
        const {books} = this.props;
        return (
            <div>
                {books.length > 0 && <h3>Books found:</h3>}
                {books.map(book => {
                        const {id} = book;
                        {/* console.log('card props: ', book) */}
                        return(
                        <BookCard                                     
                            key={id}
                            id={id}
                            clickEvent={this.handleClick}
                            {...book} 
                            />)
                    })
                }
            </div>            
        )
  }
}