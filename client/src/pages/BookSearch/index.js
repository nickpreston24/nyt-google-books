import React, { Component } from 'react'
import SearchBar from './SearchBar'
import BooksView from '../components/BooksView'
import search from  '../../utils/googleBooks'
import './style.css';
import { Link } from  'react-router-dom'
import API from '../../utils/API';

export default class BookSearch extends Component {
   
    state = {
        books: [],
        title: "",
        search: "",
        author: "",
        synopsis: "",
        keyName: "author"        
    }

    componentDidMount() {}
    
    onSearch = text => {
        text = text.trim().replace(/\s+/g, "+");
        console.log('searched for: ', text);                
        
        //TODO:
        // 1.) Search the Google Books API.
        search(text)
        .then(res => this.setState({ books: res.data.items, title: "", author: "", synopsis: "", search: text }))
        .catch(err => console.log(err));
    }
    
    applyFilter = (filter) =>{
        //TODO: 
        // 1.) Change state.filter to be the incoming filter.
        // 2.) Apply the filtering on render ONLY.  DO NOT ALTER THE DATA.
    }

    viewBook = book => {
        console.log('viewing book ' + book)
        let url = book.volumeInfo.previewLink;
        // console.log('url: ', url)        
        this.openInNewTab(url);
    }

    openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }

    saveBook = book => {        
        // console.log('saving: ', book) 
        API.saveBook(this.map(book))
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    map (book) {
        var {id, volumeInfo: {title, authors, description, imageLinks, previewLink}} = book;        
        let image = imageLinks.thumbnail;
        let link = previewLink;

        // console.log('img: ', image)
        // let description = book.volumeInfo.description;
        // console.log('description: ', description)
        // console.log('image links: ', book.searchInfo.)
        // console.log('mapped: ', mappedBook)

        const mappedBook = {id, title, authors, description, image, link}
        return mappedBook; 
    }

    render() {
        return (
            <div className='container'>
                <Link to="/Saved">Get Saved Books</Link>
                <h1>Books Search</h1>                
                <SearchBar onSearch={this.onSearch}></SearchBar>
                <BooksView
                    saveBook={this.saveBook} 
                    viewBook={this.viewBook}
                    books={this.state.books}></BooksView>
            </div>
        )
    }
}