import React from "react";
import { useState } from "react";
const EditSessions = () => {
  const [student, setStudent] = useState('');
  const [tutor, setTutor] = useState('');
  const [course, setCourse]= useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [retrospective, setRetrospective] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const courseData = { student,tutor,course,topic,description,retrospective };

    fetch('http://localhost:8080/sessions/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData)
    }).then(() => {
      console.log('new  course updated', courseData);
    })
  }
  return (
    <div style={{flex: '4',padding: '20px'}}>
    <div style={{ display: 'flex',alignitems: 'center',justifycontent: 'space-between'}}>
      <h1 style={{ color: 'crimson'}}>Edit Course</h1>
    </div>
    <div style={{display: 'flex',margintop: '20px'}}>
      <div style={{flex: '2',padding: '20px',webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',marginLeft: '20px'}}>
        <form onSubmit={handleSubmit}  style={{display: 'flex',justifyContent: 'space-between',marginTop: '20px'}}> 
            <div style={{display: 'flex',flexDirection: 'column', marginTop: '10px'}}>
              <label>Student:</label>
              <input style={{border: 'none',width: '250px',height: '30px',borderBottom: '1px solid gray'}} type="text" required value={student} onChange={(event) => setStudent(event.target.value)}/>
              
              <label>Tutor:</label>
              <input  style={{border: 'none',width: '250px',height: '30px',borderBottom: '1px solid gray'}} type="text" required value={tutor} onChange={(event) => setTutor(event.target.value)}/>
              
              <label>Course:</label>
              <input  style={{border: 'none',width: '250px',height: '30px',borderBottom: '1px solid gray'}} type="text" required value={course} onChange={(event) => setCourse(event.target.value)}/>
              
              <label>Topic:</label>
              <input  style={{border: 'none',width: '250px',height: '30px',borderBottom: '1px solid gray'}} type="text" required value={topic} onChange={(event) => setTopic(event.target.value)}/>
              
              <label>Description:</label>
              <input  style={{border: 'none',width: '250px',height: '30px',borderBottom: '1px solid gray'}} type="text" required value={description} onChange={(event) => setDescription(event.target.value)}/>
              
              <label>Retrospective:</label>
              <input  style={{border: 'none',width: '250px',height: '30px',borderBottom: '1px solid gray'}} type="text" required value={retrospective} onChange={(event) => setRetrospective(event.target.value)}/>
              <button style={{backgroundColor:'crimson',color:'black'}}>Topics</button>  
            </div>       
        </form>
      </div>
    </div>
  </div>
    
  );
}
export default EditSessions;
