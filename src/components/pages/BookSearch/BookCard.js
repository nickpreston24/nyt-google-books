import React from 'react';
import { pStyle } from './index';
export function BookCard(props) {
    return (<p style={pStyle}>{props.name}</p>);
}
