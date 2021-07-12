import React, {useState,useEffect} from 'react';
import './Preview.css';


function Preview(props) {
    return (
        <div className="preview-container">
            <div className="general-info">
                <h2>{props.generalInfo[0].firstName} {props.generalInfo[0].lastName}</h2>
                <h3>{props.generalInfo[0].role}</h3> 
                {console.log(props.education)}
                {props.education.map((item,index)=>{
                    return <li key= {index}>{item.university}</li>
                })}
            </div>
            
        </div>
    )
}

export default Preview
