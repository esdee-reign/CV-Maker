import React from 'react';
import {Row,Col,Button} from 'react-bootstrap';
import './Preview.css';
import Pdf from "react-to-pdf";

function Preview(props) {

    const ref = React.createRef();

    return (
        <div className="preview">
            <div  ref={ref}>
                <div className="">
                <div className="large bold">
                    <h2>{props.generalInfo[0].firstName} {props.generalInfo[0].lastName}</h2>  
                </div>
                <p className="preview-role">
                    {props.generalInfo[0].role}  
                </p>
                <p className="preview-location">
                    {props.generalInfo[0].location}  
                </p>
                <p className="preview-phone">
                    {props.generalInfo[0].number}    
                </p>
                <p className="preview-email">
                    {props.generalInfo[0].email}  
                </p>
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
                                <p className="large bold" key= {index}>{item.university} , {item.city}</p>
                                <p className="" key= {index}></p>
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
                                <Row className="preview-row">
                                    <Col>
                                        <p className= "large bold" key= {index}>{item.role}</p>
                                        <p key= {index}>{item.company} , {item.city}</p>                                        
                                    </Col>
                                    <Col className="right">
                                            <p key= {index}>{item.from}-{item.to}</p>
                                    </Col>
                                </Row>
                                <hr />
                            </div>
                        )
                    })}
            </div>
            </div>
                <Pdf targetRef={ref} size="A4" orientation="landscape" filename="Resume.pdf">
                {({ toPdf }) => <Button variant="danger" onClick={toPdf}>Generate Pdf</Button>}
            </Pdf>
        </div>
        )
}

export default Preview
