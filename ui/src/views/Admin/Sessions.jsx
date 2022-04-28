  import * as React from 'react';
import React, { useState, useEffect } from "react";
import { DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: 'student', headerName: 'Students', width: 120 },
  { field: 'tutor', headerName: 'Tutors', width: 120 },
  { field: 'course', headerName: 'Courses', width: 120 },
  { field: 'topic', headerName: 'Topics', width: 120 },
  { field: 'description', headerName: 'Descreiptions', width: 350 },
  { field: 'retrospective', headerName: 'Retrospective', width: 400 },];
export default ()=> {
    const [rows, setRows] = useState([]);
    const apiGet = () => {
      fetch("http://localhost:8080/sessions/")
        .then((response) => response.json())
        .then((json) => {
          setRows(json);
            json.map((session)=>{
              rows.push({student:session.student, tutor:session.tutor, course: session.course, topic:session.topic, description:session.description,retrospective:session.retrospective},);
            })});};
    useEffect(() => {
      apiGet();
    }, []);
    return (  
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
         rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    );}