import React from 'react';
export default function Jumbotron({ children }) {
    return (<div className="jumbotron" style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}>{children}</div>);
}