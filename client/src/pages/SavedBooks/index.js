import React, { Component } from 'react';
import API  from '../../utils/API'
import {Link} from 'react-router-dom'
import './style.css'
import BooksView from '../components/BooksView';

/**
 * TODO: (pseudocode)
 * 1) Render all saved books by passing their json as props into a individual BookCard instances (use map()).
 * 2) [View] btn takes user to GB book.
 * 3) [Delete] btn removes from db.
 */

export default class Saved extends Component {

    state = {
        searchText: "",
        books: []
    }

    componentDidMount(){
        this.loadBooks();
    }   

    loadBooks = () => {
        API.getBooks()
        .then(res=> this.setState({ 
            books: res.data, 
            title: "", 
            author: "", 
            synopsis: ""}))        
        .then(console.log('books loaded: ', this.state.books))
        .catch(err => console.log(err));
    }    

    removeBook = id => {
        // console.log('deleting book...' + id)

        // if(!id) return;
        // console.log('before: ', this.state.books, 'id: ', id);
        const remaining = this.state.books.filter(book => book._id !== id);
        // console.log('remaining: ', remaining)
        this.setState({books: remaining});
        this.deleteBook(id);
    }
    
    deleteBook = id => {
        console.log('deleting book...' + id)
        if(!id) return;
        API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    };    

    render() {
        return (
            <div>
                {/* {console.log('books to render: ', this.state.books)} */}
                <Link to="/Search">Search for Books</Link>
                {this.state.books.count > 0 && <h1>Books Saved</h1>}
                {/* {console.log('viewbook func', this.viewBook)} */}
                <BooksView removeBook={this.removeBook} books={this.state.books}></BooksView>
        </div>
        )
    }
}