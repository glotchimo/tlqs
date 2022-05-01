
import * as React from 'react';
import React, { useState } from "react";
import { DataGrid} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import React,{ useState } from "react";


export default ()=> {

  const columns = [
    { field: 'title', headerName: 'Title', width: 130 },
    { field: 'department', headerName: 'Department', width: 130 },
    { field: 'code', headerName: 'Code', width: 130 },
  ];
  
  const [inputs ,setInputs]= React.useState();

  const apiPost = () => {
    fetch("http://localhost:8080/courses/", {
      method: "POST",
      body: JSON.stringify({
        title: inputs.title,
        department: inputs.department,
        code: inputs.code,
      }),
      headers: {
        "Content-type":  "application/json; charset-UTF-8",
        'Accept': 'application/json' },})

      .then((response) => response.json())
      .then((json) => console.log(json));

  };
  const handleChange = (event) => {
    setInputs(()=> ({
      ...inputs, 
        [event.target.name]: event.target.value,
       
    }))
  }
  const handleSubmit = (event) => {
    apiPost();
    handleChange();
    console.log("hadnle submit",inputs);
   
  }

  return (
    <div style={{ height: 400, width: '100%' }}>
      
      
      <DataGrid
       rows={inputs}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <Button
  onClick={() => {
    handleSubmit();
  }}
>
  update
</Button>
    </div>
  );}








