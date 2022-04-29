import * as React from 'react';
import React, { useState, useEffect } from "react";
import { DataGrid} from '@mui/x-data-grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
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
        // a dom LINK here in a tag to link it to apage where user can edit
            <> <EditIcon /></>
        )},
    },
    {field: 'reate', headerName: 'Create', width: 100,
    renderCell: (params) => {
      return (
        // a dom here to link to a page like <Link to {page we want}<Link> to create a new user
        <> <AddCircleIcon /></>)},
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
    <div style={{ height: 400, width: '100%' }}>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <div style={{ display: "flex", alignItems: "baseline"}}>
           <Typography variant="title" color="inherit" noWrap>
             USER
           </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
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
