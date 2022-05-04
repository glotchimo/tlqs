import * as React from 'react';
import React, { useState, useEffect } from "react";
import { DataGrid} from '@mui/x-data-grid';
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
      <div style={{ flex:'4',padding: '20px'}}>
      
        <DataGrid
         rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    );}