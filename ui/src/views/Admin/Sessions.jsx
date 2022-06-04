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
    { field: "student", headerName: "Student", flex: 1 },
    { field: "tutor", headerName: "Tutor", flex: 1 },
    { field: "course", headerName: "Course", flex: 1 },
    { field: "topic", headerName: "Topic", flex: 1 },
    { field: "description", headerName: "Description", flex: 1 },
    { field: "retrospective", headerName: "Retrospective", flex: 1 },
    { field: "completed", headerName: "Status", flex: 1 },
  ];

  const toolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton style={{ color: "#b7142e" }} />
        <GridToolbarFilterButton style={{ color: "#b7142e" }} />
        <GridToolbarDensitySelector style={{ color: "#b7142e" }} />
        <GridToolbarExport style={{ color: "#b7142e" }} />
      </GridToolbarContainer>
    );
  };

  const getSessions = () => {
    fetch("/sessions/")
      .then((response) => response.json())
      .then((json) => {
        const data = json.map((session) => {
          return {
            id: session.id,
            student: session.student,
            tutor: session.tutor,
            course: session.course,
            topic: session.topic,
            description: session.description,
            retrospective: session.retrospective,
            completed: session.completed ? "Completed" : "Not completed",
          };
        });

        setRows(data);
      });
  };

  useEffect(() => {
    getSessions();
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
