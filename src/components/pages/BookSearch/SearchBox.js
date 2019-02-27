import React, { Component } from 'react';
import { sbStyle } from './index';
export class SearchBox extends Component {
    render() {
        return (<div>
            <h3>Book Search</h3>
            <input style={sbStyle} placeholder='Find your book!'></input>
        </div>);
    }
}
