import React from 'react';
import {Row,Col} from 'react-bootstrap';
import './Preview.css';


function Preview(props) {
    return (
        <div className="preview">
            <div className="general-info">
                <div >
                </div>
        
                <div className="preview-name">
                    <h2>{props.generalInfo[0].firstName} {props.generalInfo[0].lastName}</h2>  
                </div>
                <div className="preview-role">
                    {props.generalInfo[0].role}  
                </div>
                <div className="preview-location">
                    {props.generalInfo[0].location}  
                </div>
                <div className="preview-phone">
                    {props.generalInfo[0].number}    
                </div>
                <div className="preview-email">
                    {props.generalInfo[0].email}  
                </div>
            </div>
            <hr />
            <div className="preview-heading">
                <h3>Education</h3> 
            </div>
            <div className="education">
                {props.education.map((item,index)=>{
                        return ( 
                            <div>
                                <Row className="preview-row"> 
                                <Col>
                                <p className="large bold" key= {index}>{item.university}</p>
                                <p className="" key= {index}>{item.city}</p>
                                <p className="" key= {index}>Degree- {item.degree}</p>
                                <p className="" key= {index}>Subject- {item.subject}</p>
                                </Col>
                                <Col className="right">
                                <p className="" key= {index}>{item.from} - {item.to}</p>
                                </Col>
                                <hr />
                                </Row>
                            </div>
                        )
                    })}
            </div>
            
            <div className="experience">
                <div className="preview-heading">
                    <h3>Experience</h3> 
                </div>
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
