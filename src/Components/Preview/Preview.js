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
            </div>
            <hr />
            <div className="education">
                {props.education.map((item,index)=>{
                        return ( 
                            <div>
                                <p className="large bold" key= {index}>{item.university}</p>
                                <p className="" key= {index}>{item.city}</p>
                                <p className="" key= {index}>{item.degree}</p>
                                <p className="" key= {index}>{item.subject}</p>
                                <p className="" key= {index}>{item.from}</p>
                                <p className="" key= {index}>{item.to}</p>
                                <hr />
                            </div>
                        )
                    })}
            </div>
            
            <div className="experience">
                {props.experience.map((item,index)=>{
                        return ( 
                            <div>
                                <p key= {index}>{item.company}</p>
                                <p key= {index}>{item.city}</p>
                                <p key= {index}>{item.role}</p>
                                <p key= {index}>{item.from}</p>
                                <p key= {index}>{item.to}</p>
                                <hr />
                            </div>
                        )
                    })}
            </div>
            </div>
        )
}

export default Preview
