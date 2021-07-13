import React, {useState,useEffect} from 'react';
import './Preview.css';


function Preview(props) {
    return (
        <div className="preview">
            <div className="general-info">
                <div className="preview-name">
                    <h2>{props.generalInfo[0].firstName} {props.generalInfo[0].lastName}</h2>  
                </div>
                <div className="preview-role">
                    {props.generalInfo[0].role}  
                </div>
                <div className="preview-email">
                    {props.generalInfo[0].email}  
                </div>
                <div className="preview-phone">
                    {props.generalInfo[0].number}    
                </div>
                <div className="preview-location">
                    {props.generalInfo[0].location}  
                </div>
                {console.log(props.education)}
                {props.education.map((item,index)=>{
                    return <li key= {index}>{item.university}</li>
                })}
            </div>
            </div>
        )
}

export default Preview
