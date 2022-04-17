//ToDo: Clean up the code like the way you set the fields making sure that equal signs are the same etc....

import * as React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
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

export default function TutorForm(prop) {
  const [value, setValue] = useState("");

  //Once the backend is sorted out make the patch request to retrospetive
  const handleSubmitTextArea = (event) => {
    event.preventDefault();

    if (value.length == 0) {
      alert("Please enter a message");
      return;
    } else {
      alert(`Input from form: ${value}`);
    }
  };

  const handleSubmitNoTextArea = (event) => {
    event.preventDefault();
    alert(`Are you sure about that?`);
  };

  return (
    <>
      <CssBaseline />
      <form onSubmit={handleSubmitTextArea}>
        <TextField
          id="outlined-basic"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          style={stylingObject.form}
          variant="outlined"
          fullWidth
          rows={6}
          multiline
        />

        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={stylingObject.button}
        >
          Submit Notes
        </Button>
      </form>

      <form onSubmit={handleSubmitNoTextArea}>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          style={stylingObject.button}
        >
          Mark Complete Without Notes
        </Button>
      </form>
    </>
  );
}
