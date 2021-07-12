import './App.css';
import {Form,Row,Col,Button} from 'react-bootstrap';
import { useState , Fragment} from 'react';
import Preview from '../Preview/Preview';



function App() {
  const [generalInfo, setGeneralInfo] =  useState([{firstName:"", lastName:"", role:"", email:"", number:"", location:""}]);
  const [education, setEducation] = useState([{university:"", degree: "", subject: "", city: "", from:"", to:""}]);
  const [experience, setExperience] = useState([{company:"", role: "", city: "", from:"", to:""}]);

  const handleInputChangeGen = (index, e) =>{
    const values = [...generalInfo];
        if (e.target.name === "firstname") {
          values[index].firstName = e.target.value;
        } 
        else if (e.target.name === "lastname") {
            values[index].lastName = e.target.value;
          } 
          else if (e.target.name === "role") {
            values[index].role = e.target.value;
          } 
          else if (e.target.name === "email") {
            values[index].email = e.target.value;
          }
          else if (e.target.name === "number") {
            values[index].number = e.target.value;
          }    
        else {
          values[index].location = e.target.value;
        }
    
        setGeneralInfo(values);
  }


    const handleInputChangeEdu = (index,e) => {
        const values = [...education];
        if (e.target.name === "university") {
          values[index].university = e.target.value;
        } 
        else if (e.target.name === "city") {
            values[index].city = e.target.value;
          } 
          else if (e.target.name === "degree") {
            values[index].degree = e.target.value;
          } 
          else if (e.target.name === "subject") {
            values[index].subject = e.target.value;
          }
          else if (e.target.name === "from") {
            values[index].from = e.target.value;
          }    
        else {
          values[index].to = e.target.value;
        }
    
        setEducation(values);
    }

    const handleInputChangeExp = (index,e) => {
      const values = [...experience];
      if (e.target.name === "company") {
        values[index].company = e.target.value;
      } 
      else if (e.target.name === "city") {
          values[index].city = e.target.value;
        } 
        else if (e.target.name === "role") {
          values[index].role = e.target.value;
        } 
        else if (e.target.name === "from") {
          values[index].from = e.target.value;
        }    
      else {
        values[index].to = e.target.value;
      }
  
      setExperience(values);
  }
    const handleAddFieldsExp = (e) =>{
        let value = [...experience];
        value.push({company:"", role: "", city: "", from:"", to:""});
        setExperience(value);
    }

    const handleDeleteFieldsExp = (e, index) =>{
        console.log(index);
        const value = [...experience];
        value.splice(index,1);
        setExperience(value);
    }
    const handleAddFieldsEdu = (e) =>{
      let value = [...education];
      value.push({university:"", degree: "", subject: "", city: "", from:"", to:""});
      setEducation(value);
  }

  const handleDeleteFieldsEdu = (e, index) =>{
      console.log(index);
      const value = [...education];
      if(index !== 0)
      value.splice(index,1);
      setEducation(value);
  }

  return (
    <div className="App">
      <div className="component-container">
      <div className="form-container">
      <h1> General Information </h1>
            <Form>
               {
                   generalInfo.map((item,index)=> {
                    <Fragment key={`${item}~${index}`}>
        
                        <Row>
                          <Col>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text" 
                                name="firstname"
                                placeholder="First name" 
                                value={item.firstName}  
                                onChange = { e =>  handleInputChangeGen(index,e)}
                                />
                          </Col>
                       
                          <Col>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text" 
                                name="lastname"
                                placeholder="Last name" 
                                value={item.lastName}  
                                onChange = { e =>  handleInputChangeGen(index,e)}
                                />
                          </Col>
                        </Row>
                        <Row>
                          <Form.Label>Role</Form.Label>
                          <Form.Control
                              type="text" 
                              name="role"
                              placeholder="Role" 
                              value={item.role}  
                              onChange = { e =>  handleInputChangeGen(index,e)}
                              />
                        </Row>
                        <Row>
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                              type="email" 
                              name="email"
                              placeholder="Email" 
                              value={item.email}
                              onChange = { e =>  handleInputChangeGen(index,e)}  
                              />
                        </Row>
                        <Row>
                          <Col>
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="tel" 
                                name="phone"
                                placeholder="Phone" 
                                value={item.phone} 
                                onChange = { e =>  handleInputChangeGen(index,e)} 
                                />
                          </Col>

                          <Col>
                            <Form.Label>Location</Form.Label>
                            <Form.Control
                                type="text" 
                                name="location"
                                placeholder="Location" 
                                value={item.location}  
                                onChange = { e =>  handleInputChangeGen(index,e)}
                                />
                          </Col>
                        </Row>
                    </Fragment>
                   })
               }
            </Form>
        </div>
        <div className="form-container">
            <h1> Education </h1>
            <Form>
               {
                   education.map((item,index)=> (
                    <Fragment key={`${item}~${index}`}>
        
                        <Row>
                          <Form.Label>University</Form.Label>
                          <Form.Control
                              type="text" 
                              name="university"
                              placeholder="University" 
                              value={item.university}  
                              onChange = { e =>  handleInputChangeEdu(index,e)}
                              />
                        </Row>
                        <Row>
                          <Form.Label>City</Form.Label>
                          <Form.Control
                              type="text" 
                              name="city"
                              placeholder="City" 
                              value={item.city}  
                              onChange = { e =>  handleInputChangeEdu(index,e)}
                              />
                        </Row>
                        <Row>
                          <Form.Label>Degree</Form.Label>
                          <Form.Control
                              type="text" 
                              name="degree"
                              placeholder="Degree" 
                              value={item.degree}  
                              onChange = { e =>  handleInputChangeEdu(index,e)}
                              />
                        </Row>
                        <Row>
                          <Form.Label>Subject</Form.Label>
                          <Form.Control
                              type="text" 
                              name="subject"
                              placeholder="Subject" 
                              value={item.subject}
                              onChange = { e =>  handleInputChangeEdu(index,e)}  
                              />
                        </Row>
                        <Row>
                            <Col>
                          <Form.Label>From</Form.Label>
                          <Form.Control
                              type="text" 
                              name="from"
                              placeholder="From" 
                              value={item.from} 
                              onChange = { e =>  handleInputChangeEdu(index,e)} 
                              />
                              </Col>
                              <Col>
                          <Form.Label>To</Form.Label>
                          <Form.Control
                              type="text" 
                              name="to"
                              placeholder="To" 
                              value={item.to}  
                              onChange = { e =>  handleInputChangeEdu(index,e)}
                              />
                        </Col>
                        </Row>
                        <Button variant="danger" onClick={() => handleDeleteFieldsEdu(index)}>Delete</Button>
                    </Fragment>
                   ))
               }
            </Form>
            <Button onClick={() => handleAddFieldsEdu()}>Add</Button>
        </div>
    <div className="form-container">
      <h1> Experience </h1>
            <Form>
               {
                   experience.map((item,index)=> (
                    <Fragment key={`${item}~${index}`}>
        
                        <Row>
                          <Col>
                            <Form.Label>Company</Form.Label>
                            <Form.Control
                                type="text" 
                                name="company"
                                placeholder="Company" 
                                value={item.company}  
                                onChange = { e =>  handleInputChangeExp(index,e)}
                                />
                          </Col>
                       
                          <Col>
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="text" 
                                name="role"
                                placeholder="Role" 
                                value={item.role}  
                                onChange = { e =>  handleInputChangeExp(index,e)}
                                />
                          </Col>
                        </Row>
                        <Row>
                          <Form.Label>City</Form.Label>
                          <Form.Control
                              type="text" 
                              name="city"
                              placeholder="City" 
                              value={item.city}  
                              onChange = { e =>  handleInputChangeExp(index,e)}
                              />
                        </Row>
                        <Row>
                            <Col>
                          <Form.Label>From</Form.Label>
                          <Form.Control
                              type="text" 
                              name="from"
                              placeholder="From" 
                              value={item.from} 
                              onChange = { e =>  handleInputChangeExp(index,e)} 
                              />
                              </Col>
                              <Col>
                          <Form.Label>To</Form.Label>
                          <Form.Control
                              type="text" 
                              name="to"
                              placeholder="To" 
                              value={item.to}  
                              onChange = { e =>  handleInputChangeExp(index,e)}
                              />
                        </Col>
                        </Row>
                        <Button variant="danger" onClick={() => handleDeleteFieldsExp(index)}>Delete</Button>
                    </Fragment>
                   ))
               }
            </Form>
        </div>
        <Button onClick={() => handleAddFieldsExp()}>Add</Button>
      </div>
      <div>
      <Preview generalInfo = {generalInfo} education = {education} experience = {experience}/>
    </div>
</div>
  )
}

export default App;
