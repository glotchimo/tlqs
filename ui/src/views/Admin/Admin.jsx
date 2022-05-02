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
            <Button color="error" href="https://www.google.com/">
              Users
            </Button>
            <Button color="error">Courses</Button>
            <Button color="error">Sessions</Button>
            <Button color="error">Topics</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}
