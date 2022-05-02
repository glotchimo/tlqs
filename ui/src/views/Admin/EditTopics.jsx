import React from "react";
import { useState } from "react";
const EditTopics = () => {
  const [name, setName] = useState('');
  const [courseid, setCourseID] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const courseData = { name,courseid };

    fetch('http://localhost:8080/courses/', {
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
              <label>Name:</label>
              <input style={{border: 'none',width: '250px',height: '30px',borderBottom: '1px solid gray'}} type="text" required value={name} onChange={(event) => setName(event.target.value)}/>
              <label>CourseID:</label>
              <input  style={{border: 'none',width: '250px',height: '30px',borderBottom: '1px solid gray'}} type="text" required value={courseid} onChange={(event) => setCourseID(event.target.value)}/>
              <button>Update</button>  
            </div>       
        </form>
      </div>
    </div>
  </div>
    
  );
}
 
export default EditTopics;