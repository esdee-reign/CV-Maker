import {React, useState} from 'react';
import Form from 'react-bootstrap/Form'
import { Row, Col } from 'react-bootstrap';
import './GeneralInformation.css';

function GeneralInformation() {
    const [firstName, setFirstName] =  useState("");
    const [lastName, setLastName] =  useState("");
    const [role, setRole] =  useState("");
    const [email, setEmail] =  useState("");
    const [number, setNumber] =  useState("");
    const [location, setLocation] =  useState("");
    
    
    return (
        <div className="form-container">
            <div className="heading">
            General Information
            </div>
            <Form>
                <div className="style">
                    <Row>
                        <Col><input type="text" id="firstName" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}></input></Col>
                        <Col><input id="lastName" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}></input></Col>
                    </Row>
                </div>
                <div className="role">
                    <input type="text" id="title" placeholder="Title" value={role} onChange={e => setRole(e.target.value)}></input>
                </div>
                <div className="mail">
                    <input type="email" id="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className="number">
                    <input type="tel" id="phone" placeholder="Phone number" value={number} onChange={e => setNumber(e.target.value)}></input>
                </div>
                <div className="location">
                    <input type="text" id="city" placeholder="Location" value={location} onChange={e => setLocation(e.target.value)}></input>
                </div>
            </Form>
        </div>
    )
}

export default GeneralInformation;
