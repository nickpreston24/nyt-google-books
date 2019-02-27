import React, { Component } from 'react';

const inputStyle = { 
    // color: 'limegreen',
    // fontFamily: 'Comic Sans',
    // backgroundColor: 'purple'
    border :'3px solid darkred'
};

const buttonStyle = { margin: '10px' }

export class SearchBox extends Component {

    constructor(){
        super();
        this.onSubmit=this.onSubmit.bind(this);
    }

    onSubmit(event){
        event.preventDefault();
        const query = event.target.elements.query.value;
        console.log('search: ', query);
        this.props.onSearch(query);
    }

    componentDidMount(){
        const {onSearch, initialQuery} = this.props;
        
        if (initialQuery)
            onSearch(initialQuery)
    }

    render() {
        const {initialQuery} = this.props;
        return (
            <section>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <h3>Enter a word or phrase:</h3>                
                        <input style={inputStyle}  defaultValue={initialQuery}
                            placeholder='Find your book!' type="text" name="query" />
                        {/* <Button/> */}
                        <button style={buttonStyle} type="submit">Search</button>
                    </div>
                </form>
            </section>        
        );
    }
}
