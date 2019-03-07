import React, { Component } from 'react'
import BookCard from '../BookCard';
import './style.css'
//Contains the render logic for a list of books.
export default class BooksView extends Component {
    
    // type = this.props;
    // constructor(){
    //     super();
    //     const { books, saveBook, viewBook, removeBook } = this.props;
    //     // setState({type: saveBook ? 'Save'})
    // }   

    //TODO: refactor this logic to be in another file (i.e. find a pattern which uses a View.js file)
    handleClick = event => {
        //handle either button:
        const { books, saveBook, viewBook, removeBook } = this.props;
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
            case 'remove':
                removeBook(book);
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
                        //_id is from Db, id is from Google.
                        const {id, _id} = book;
                        let uniqueId = id || _id;
                        return(
                        <BookCard 
                            type={!this.props.saveBook ? 'search' : 'save'}
                            key={uniqueId}
                            id={uniqueId}
                            clickEvent={this.handleClick}
                            {...book} 
                            />)
                    })
                }
            </div>            
        )
  }
}