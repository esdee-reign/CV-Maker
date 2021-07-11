import React from 'react'
import Button from 'react-bootstrap/Button';
import Education from './Education';
import './Education.css';

function EducationContainer() {
    return (
        <div className="form-container">
            <div className="tiles-container">
                <Education />
            </div>
            <div className="button-container">
                <Button variant="primary" className="add-btn">Add</Button>
            </div>
        </div>
    )
}

export default EducationContainer
