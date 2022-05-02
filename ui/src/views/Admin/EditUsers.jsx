import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";

const EditUsers = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole]= useState('');
  const [session, setSession] = useState('');
  const [course, setCourse] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    const courseData = { name,email,role,session,course};

    fetch('http://localhost:8080/users/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(courseData)
    }).then(() => {
      console.log('new  User updated', courseData);
    })
  }
  return (
    <div style={{flex: '4',padding: '20px'}}>
    <div style={{ display: 'flex',alignitems: 'center',justifycontent: 'space-between'}}>
      <h1 style={{ color: 'crimson'}}>Edit User</h1>
    </div>
    <div style={{display: 'flex',margintop: '20px'}}>
      <div style={{flex: '2',padding: '20px',webkitBoxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',boxShadow: '0px 0px 15px -10px rgba(0, 0, 0, 0.75)',marginLeft: '20px'}}>
        <form onSubmit={handleSubmit}  style={{display: 'flex',justifyContent: 'space-between',marginTop: '20px'}}> 
            <div style={{display: 'flex',flexDirection: 'column', marginTop: '10px'}}>
              <label>Name:</label>
              <input style={{border: 'none',width: '250px',height: '30px',borderBottom: '1px solid gray'}} type="text" required value={name} onChange={(event) => setName(event.target.value)}/>
              
              <label>Email:</label>
              <input  style={{border: 'none',width: '250px',height: '30px',borderBottom: '1px solid gray'}} type="text" required value={email} onChange={(event) => setEmail(event.target.value)}/>
              
              <label>Role:</label>
              <input  style={{border: 'none',width: '250px',height: '30px',borderBottom: '1px solid gray'}} type="number" required value={role} onChange={(event) => setRole(event.target.value)}/>
              
              <label>Session:</label>
              <input  style={{border: 'none',width: '250px',height: '30px',borderBottom: '1px solid gray'}} type="text" required value={session} onChange={(event) => setSession(event.target.value)}/>
              
              <label>Course:</label>
              <input  style={{border: 'none',width: '250px',height: '30px',borderBottom: '1px solid gray'}} type="text" required value={course} onChange={(event) => setCourse(event.target.value)}/>
              <button >Updated</button>  
            </div>       
        </form>
      </div>
    </div>
  </div>
    
  );
}
export default EditUsers;
