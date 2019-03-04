import React, { Component } from 'react'
import BookCard from './BookCard'
import SearchBar from './SearchBar'
import BookList from './BookList'
import API from '../../utils/API';
import './style.css';


export default class BookSearch extends Component {
   
    state = {
        books: [],
        search: "",
        keyName: "author"
    }

    componentDidMount(){
        this.loadBooks();
    }

    loadBooks= ()=>{
        API.getBooks()
        .then(res=> this.setState({books:res.data}))
        // .then(res=>console.log(res))
        .catch(err=>console.log(err));
    }

    removeBook = id => {
        console.log('before: ', this.state.books, 'id: ', id);
        const remaining = this.state.books.filter(book=>book._id!==id);
        console.log('remaining: ', remaining)
        this.setState({books: remaining});
    }

    onSearch = text => {
        let books = this.state.books;
        console.log('searched for: ', text);        

        this.setState({search: text});
        // console.log('books:', books)  

        const remaining = books.filter(p=>{
            console.log('key:', p[this.state.keyName])
            return p[this.state.keyName].includes(text)
        })

        console.log('rem: ', remaining);
    }   

    render() {
        return (
            <div className='container'>
                {/* <h1>Books Search</h1>
                <h2>Filter Books</h2> */}
                <BookList>
                    <SearchBar onSearch={this.onSearch}></SearchBar>
                        <h3>Books found:</h3>
                        {/* {console.log('books state: ', this.state.books)} */}
                        {this.state.books
                            .map(book => (
                                <BookCard                                     
                                    key={book._id}
                                    id={book._id}
                                    {...book} 
                                    removeBook={this.removeBook} 
                                    />))}
                </BookList>
            </div>
        )
    }
}