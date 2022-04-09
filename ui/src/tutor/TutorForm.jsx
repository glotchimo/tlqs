import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
var stylingObject = {
  form: {
    color: "#FFFFFF",
    border: "#FFFFFF",
    marginTop: "10px",
  },
  button: {
    marginTop: "10px",
  },
  multilineColor: {
    color: "#FFFFFF",
  },
};

export default function SessionGlance(prop) {
  return (
    <>
      <CssBaseline />
      <TextField
        id="outlined-basic"
        label="Session Notes"
        style={stylingObject.form}
        variant="outlined"
        fullWidth
        rows={6}
        multiline
      />
      <Button variant="contained" color="primary" style={stylingObject.button}>
        Submit Notes
      </Button>
    </>
  );
}
