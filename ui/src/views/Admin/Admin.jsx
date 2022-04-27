import * as React from "react";
import React, { useState, useEffect } from "react";
import { DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: 'name', headerName: 'Names', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'role', headerName: 'Role', width: 130 },
  { field: 'sessions', headerName: 'Sessions', width: 130 },
  { field: 'courses', headerName: 'Courses', width: 130 }, 
];
export default () => {
  const [rows, setRows] = useState([]);
  const getAPI = () => {
    fetch("/users/")
      .then((response) => response.json())
      .then((json) => {
        setRows(json);
          json.map((user)=>{
            console.log(course.title);

            rows.push({name:user.name, email: user.email, role:user.role, sessions: user.sessions, courses:user.courses},);
          })
      });
  };
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
  );

  
}
