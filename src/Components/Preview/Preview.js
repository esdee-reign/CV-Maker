import React, {useState,useEffect} from 'react';
import './Preview.css';


function Preview(props) {
    const [generalInfo, setGeneralInfo] = useState(props.generalInfo);
    const [education, setEducation] = useState(props.education);
    const [experience, setExperience] = useState(props.experience);
    return (
        <div className="preview-container">
            <div className="general-info">
                <h2>{generalInfo[0].firstName} {generalInfo[0].lastName}</h2>
                <h3>{generalInfo[0].role}</h3> 
                {console.log(education)}
                {education.map((item,index)=>{
                    return <li key= {index}>{item.university}</li>
                })}
            </div>
            
        </div>
    )
}

export default Preview
