import * as React from "react";
import React, { useState, useEffect } from "react";
import { DataGrid} from '@mui/x-data-grid';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

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
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            Users
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Courses
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Sessions
          </Typography>
          <Typography variant="h6" color="inherit" component="div">
            Topics
          </Typography>
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
