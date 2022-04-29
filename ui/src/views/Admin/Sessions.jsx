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

export default ()=> {
  const columns = [
    { field: 'id', headerName: 'id', width: 120 },
    { field: 'student', headerName: 'Students', width: 120 },
    { field: 'tutor', headerName: 'Tutors', width: 120 },
    { field: 'course', headerName: 'Courses', width: 120 },
    { field: 'topic', headerName: 'Topics', width: 120 },
    { field: 'description', headerName: 'Descreiptions', width: 350 },
    { field: 'retrospective', headerName: 'Retrospective', width: 400 },
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
    const apiGet = () => {
      fetch("http://localhost:8080/sessions/")
        .then((response) => response.json())
        .then((json) => {
          setRows(json);
            json.map((session)=>{
              rows.push({id:session.id,student:session.student, tutor:session.tutor, course: session.course, topic:session.topic, description:session.description,retrospective:session.retrospective},);
            })});};

    useEffect(() => {
      apiGet();
    }, []);
  const handleDelete = (id) => {
    setRows(rows.filter((item) => item.id !== id));
  };
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
             SESSIONS
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
    );}