import React from 'react';
import './Preview.css';


function Preview(props) {
    return (
        <div className="preview-container">
            <div className="general-info">
                <div id="name"></div>
                <div id="title"></div>
                <div id="email"></div>
                <div id="phone"></div>
                <div id="location"></div>
            </div>
            
        </div>
    )
}

export default Preview
