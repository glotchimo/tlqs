import * as React from 'react';
import React, { useState, useEffect } from "react";
import { DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: 'course', headerName: 'CourseID', width: 130 },
  { field: 'name', headerName: 'Name', width: 130 },];
export default ()=> {
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