import React, { useState } from 'react';
import {Form, Row, Col} from 'react-bootstrap';

function Education(){
    const [university, setUniversity] =  useState("");
    const [degree, setDegree] = useState("");
    const [subject, setSubject] = useState("");
    const [city , setCity] = useState("");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");


    return(
        <div className="form-container">
            <div className="heading">
            Education
            </div>
            <Form>
                <div className="university">
                    <input type="text" placeholder="University" value={university} onChange={e => setUniversity(e.target.value)}></input>
                </div>
                <div className="degree">
                    <input type="text" placeholder="Degree" value={degree} onChange={e => setDegree(e.target.value)}></input>
                </div>
                <div className="subject">
                    <input type="text" placeholder="Subject" value={subject} onChange={e => setSubject(e.target.value)}></input>
                </div>
                <div className="city">
                    <input type="text" placeholder="City" value={city} onChange={e => setCity(e.target.value)}></input>
                </div>
                <div className="style">
                    <Row>
                        <Col><input type="text" placeholder="From" value={from} onChange={e => setFrom(e.target.value)}></input></Col>
                        <Col><input placeholder="To" value={to} onChange={e => setTo(e.target.value)}></input></Col>
                    </Row>
                </div>
            </Form>
        </div>
    );
}

export default Education;