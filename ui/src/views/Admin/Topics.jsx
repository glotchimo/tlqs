import * as React from 'react';
import React, { useState, useEffect } from "react";
import { DataGrid} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';


export default ()=> {
  const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'course', headerName: 'CourseID', width: 130 },
    { field: 'name', headerName: 'Name', width: 130 },
    {field: 'delete', headerName: 'Delete', width: 100,
    renderCell: (params) => {
      return (
        <DeleteOutlineIcon onClick={() => handleDelete(params.row.id)}/>)},},
  
    {field: 'edit', headerName: 'Edit', width: 100,
    renderCell: (params) => {
      return (
          <Button a href=" Topics.jsx">
            <EditIcon />
            </Button>
        )},
    },
    {field: 'reate', headerName: 'Create', width: 100,
    renderCell: (params) => {
      return (
        
        <AddCircleIcon />)},
    },];

    const [rows, setRows] = useState([]);
    const apiGet = () => {
      fetch("http://localhost:8080/topics/")
        .then((response) => response.json())
        .then((json) => {
          setRows(json);
            json.map((topic)=>{
              rows.push({course:topic.course,  name:topic.name},);
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