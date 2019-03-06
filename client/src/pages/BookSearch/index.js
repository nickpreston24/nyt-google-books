import React, { Component } from 'react'
import SearchBar from './SearchBar'
import BooksView from './BooksView'
import search from  '../../utils/googleBooks'
import './style.css';
import { Link } from  'react-router-dom'

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

    render() {
        return (
            <div className='container'>
                <h1>Books Search</h1>                
                <Link to="/Saved">Get Saved Books</Link>
                <SearchBar onSearch={this.onSearch}></SearchBar>
                <BooksView books={this.state.books}></BooksView>
            </div>
        )
    }
}