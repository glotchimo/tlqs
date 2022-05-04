import * as React from 'react';
import React, { useState, useEffect } from "react";
import { DataGrid} from '@mui/x-data-grid'; 
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default () =>{
  const columns = [
    { field: 'id', headerName: 'ID', width: 200},
    { field: 'name', headerName: 'Names', width: 200},
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'role', headerName: 'Role', width: 80},
    { field: 'sessions', headerName: 'Sessions', width: 200 },
    { field: 'courses', headerName: 'Courses', width: 200,},
    {field: 'delete', headerName: 'Delete', width: 100,
    renderCell: (params) => {
      return (
        <DeleteOutlineIcon onClick={() => handleDelete(params.row.id)}/>)},},
  
    {field: 'edit', headerName: 'Edit', width: 100,
    renderCell: (params) => {
      return (
             <EditIcon />
        )},
    },
    {field: 'reate', headerName: 'Create', width: 100,
    renderCell: (params) => {
      return (
        <AddCircleIcon />
        )},
    },
  ];

  const [rows, setRows] = useState([]);
  useEffect(() => {
    apiGet();
  }, []);

  const handleDelete = (id) => {
    setRows(rows.filter((item) => item.id !== id));
  };

  const apiGet = () => {
    fetch("http://localhost:8080/users/")
      .then((response) => response.json())
      .then((json) => {
        setRows(json);
          json.map((user)=>{
            rows.push({id:user.id,name:user.name, email: user.email, role:user.role, 
              sessions: user.sessions, courses:user.courses,
            },);
          })});};

  return (
    <div style={{ flex:'4',padding: '20px'}}>
       
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
