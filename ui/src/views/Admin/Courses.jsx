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
import React, { useState } from "react";

export default () => {
  const [rows, setRows] = useState([]);
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    { field: "title", headerName: "Title", flex: 1 },
    { field: "code", headerName: "Code", flex: 1 },
  ];

  const toolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  };

  const getCourses = () => {
    fetch("/courses/")
      .then((response) => response.json())
      .then((json) => {
        setRows(json);
      });
  };

  useEffect(() => {
    getCourses();
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
