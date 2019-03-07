import React from 'react';
import './style.css';

export default function BookCard(props) 
    {        
        console.log('book card props:', props);
        const {title, authors, description, imageLinks} = props.volumeInfo || props;
        const {clickEvent, id}= props;
        // console.log('images: ', imageLinks)
        // let image = imageLinks.thumbnail;
        return (
            <div className="card">
                <div className="img-container">
                    {/* {image && <img alt={title} src={image}/>} */}
                </div>
                <div className="content">
                    <ul>
                        {title && <li><strong>{title}</strong></li>}
                        {authors && <li><strong>by:</strong> {authors.join(", ").trim()}</li>}
                        {description && <li><strong>Description:</strong> {description.substring(0,150) + " ..."}</li>}
                    </ul>
                    <button 
                        onClick={()=> clickEvent({action:'view', id})}
                        className="viewBtn">View</button>
                    <button 
                        onClick={()=> clickEvent({action:'save', id})}
                        className="saveBtn">Save</button>
                </div>
            </div>
        )
}
