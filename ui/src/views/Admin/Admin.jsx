import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Admin() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button href="Users.jsx">
              Users
            </Button>
            <Button href="Courses.jsx">Courses</Button>
            <Button href="Sessions.jsx">Sessions</Button>
            <Button href="Topics.jsx">Topics</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}
