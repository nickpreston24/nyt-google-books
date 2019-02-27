import React, { Component } from 'react';

export default class View extends Component {
    state = {};
    componentDidMount() { this.loadBooks(); }
    loadBooks = () => {
        //todo: api get
    };
    deleteBook = id => {
        //todo: api del
    };
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        //todo: save book.
    };
    render() {
        return <div>
            stuff
        </div>;
    }
}
