import * as React from 'react';
import React, { useState, useEffect } from "react";
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 130 },
    { field: 'title', headerName: 'Ttile', width: 130 },
    { field: 'code', headerName: 'Code', width: 130 },
    {
      field: 'delete', headerName: 'Delete', width: 100,
      renderCell: (params) => {
        return (
          <DeleteOutlineIcon onClick={() => handleDelete(params.row.id)} />)
      },
    },

    {
      field: 'edit', headerName: 'Edit', width: 100,
      renderCell: (params) => {
        return (

          <EditIcon />
        )
      },
    },
    {
      field: 'reate', headerName: 'Create', width: 100,
      renderCell: (params) => {
        return (

          <AddCircleIcon />


        )
      },
    },];

  const [rows, setRows] = useState([]);

  const apiGet = () => {
    fetch("http://localhost:8080/courses/")
      .then((response) => response.json())
      .then((json) => {
        setRows(json);
        json.map((course) => {
          rows.push({ title: course.title, code: course.code },);
        })
      });
  };

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
  );
}