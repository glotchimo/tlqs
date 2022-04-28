import * as React from 'react';
import React, { useState, useEffect } from "react";
import { DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: 'title', headerName: 'Ttile', width: 130 },
  { field: 'code', headerName: 'Code', width: 130 },];
export default function Courses() {
    const [rows, setRows] = useState([]);
  const apiGet = () => {
    fetch("/courses/")
      .then((response) => response.json())
      .then((json) => {
        setRows(json);
          json.map((course)=>{
            rows.push({title:course.title, code:course.code},);
          })}); };
  useEffect(() => {
    apiGet();
  }, []);
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