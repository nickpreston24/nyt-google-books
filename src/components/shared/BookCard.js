import React from 'react';

const pStyle = {
    color: 'limegreen',
    backgroundColor:'purple',
    textAlign : 'center',
    lineHeight: '100px'
};

export function BookCard(props) {
    return (<p style={pStyle}>{props.name}</p>);
}
