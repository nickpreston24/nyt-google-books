import React from 'react';
import './style.css';

export default function BookCard({
    id, removeBook, viewBook, volumeInfo: {title, authors}, ...props}, 
    // searchInfo, searchInfo: { textSnippet: {synopsis} }
) 
    {    
    let synopsis = props.searchInfo.textSnippet;    
    // console.log('synopsis: ', synopsis, 'authors', authors, 'title', title)
    return (
        <div className="card">
        <div className="img-container">            
            {props.img && <img alt={title} src={'image'}/>}
        </div>
        <div className="content">
            <ul>
                {title && <li><strong>{title}</strong></li>}
                {authors && <li><strong>by:</strong> {authors.join(", ").trim()}</li>}
                {synopsis && <li><strong>Synopsis:</strong> {synopsis}</li>}                
            </ul>
        </div>

        {/* TODO: find a better button than this... */}
        {/* <span onClick={_ => removeBook(id)} className="remove">
            𝘅
        </span> */}
        {removeBook && <button 
            onClick={_=>removeBook(id)} 
            className="remove">Remove</button>}
        {viewBook && <button 
            onClick={_=>viewBook(id)}
            className="view">View</button>}
            
        </div>
    )
}
