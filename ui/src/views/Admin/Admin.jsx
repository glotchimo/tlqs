import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Courses from "./Courses";
import Sessions from "./Sessions";
import Users from "./Users";

export default () => {
  const [view, setView] = React.useState(0);

  let bar = (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar style={{backgroundColor:"#343a40"}} >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>
            <Button sx={{m:.5}} style={{ color:"#fff", backgroundColor:"#b7142e"}} onClick={() => setView(0)}>
              Courses
            </Button>
            <Button sx ={{m:.5}} style={{ color:"#fff", backgroundColor:"#b7142e"}} onClick={() => setView(1)}>
              Sessions
            </Button>
            <Button sx={{m:.5}} style={{color:"#fff", backgroundColor:"#b7142e" }} onClick={() => setView(2)}>
              Users
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );

  switch (view) {
    case 0:
      return (
        <>
          {bar}
          <Courses />
        </>
      );
    case 1:
      return (
        <>
          {bar}
          <Sessions />
        </>
      );
    default:
      return (
        <>
          {bar}
          <Users />
        </>
      );
  }
};
