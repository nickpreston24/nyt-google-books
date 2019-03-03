import React from 'react';
import './style.css';

export default function BookCard(props) {
    
    let {name, authors, synopsis} = props;
    
    return (
        <div className="card">
        <div className="img-container">            
            <img alt={name} src={'image'}/>
        </div>
        <div className="content">
            <ul>
                {name && <li><strong>{name}</strong></li>}
                {authors && <li><strong>by:</strong> {authors.join(" ")}</li>}
                {synopsis && <li><strong>Synopsis:</strong> {synopsis}</li>}                
            </ul>
        </div>

        {/* TODO: find a better button than this... */}
        <span onClick={_ => removeBook(id)} className="remove">
            𝘅
        </span>
        </div>
    )
}
