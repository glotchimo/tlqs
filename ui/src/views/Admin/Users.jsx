import * as React from "react";
import React, { useState, useEffect } from "react";
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,

} from "@mui/x-data-grid";

export default () => {
  const [rows, setRows] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "name", headerName: "Names", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "role", headerName: "Role", flex: 1, editable:true },
    { field: "sessions", headerName: "Sessions", flex: 1 },
    { field: "courses", headerName: "Courses", flex: 1 },
  ];

  const toolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton style={{color:"#b7142e"}} />
        <GridToolbarFilterButton style={{color:"#b7142e"}} />
        <GridToolbarDensitySelector style={{color:"#b7142e"}} />
        <GridToolbarExport style={{color:"#b7142e"}}/>
        
      </GridToolbarContainer>
    );
  };

  const getUsers = () => {
    fetch("/users/")
      .then((response) => response.json())
      .then((json) => {
        setRows(json);
      });
  };
  const patchUsers=()=>{
   requestOptions = {
    method: 'POST', 
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title: 'post react' })
};
fetch("/users", requestOptions)
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
        const data = isJson && await response.json();

        if (!response.ok) {
            const error = (data && data.message) || response.status;
            return Promise.reject(error);
        }

        this.setState({ postId: data.id })
    })
    .catch(error => {
        //this.setState({ errorMessage: error.toString() });
        console('There was an error!');
    });
  }

  useEffect(() => {
    getUsers();
    patchUsers();
  }, []);

  return (
    <DataGrid 
      rows={rows}
      columns={columns[{ field: 'role', editable: true }]}
      pageSize={100}
      rowsPerPageOptions={[100]}
      autoHeight
      components={{ Toolbar: toolbar }}
      style={{ marginTop: "0.5rem" }}
    />
  );
};
