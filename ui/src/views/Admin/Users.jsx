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
    { field: "role", headerName: "Role", flex: 1 },
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

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={100}
      rowsPerPageOptions={[100]}
      autoHeight
      components={{ Toolbar: toolbar }}
      style={{ marginTop: "0.5rem" }}
    />
  );
};
