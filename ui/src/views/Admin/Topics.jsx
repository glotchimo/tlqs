import * as React from 'react';
import React, { useState, useEffect } from "react";
import { DataGrid} from '@mui/x-data-grid';

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
        // a dom LINK here in a tag to link it to apage where user can edit
            <> <EditIcon /></>
        )},
    },
    {field: 'reate', headerName: 'Create', width: 100,
    renderCell: (params) => {
      return (
        // a dom here to link to a page like <Link to {page we want}<Link> to create a new user
        <> <AddCircleIcon /></>)},
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