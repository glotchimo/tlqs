import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
const stylingObject = {
  form: {
    color: "#FFFFFF",
    border: "#FFFFFF",
    marginTop: "10px",
  },
  button: {
    marginTop: "10px",
  },
};

export default function TutorForm(prop) {
  const [value, setValue] = useState("");

  const patchCurrentSession = async (sessionId) => {
    await fetch(`http://localhost:8080/sessions/${sessionId}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        retrospective: value,
        completed: true,
      }),
    });
  };

  const handleSubmitTextArea = (event) => {
    event.preventDefault;
    if (confirm("Are you sure you want to submit with notes?")) {
      patchCurrentSession(prop.id);
    } else {
      alert("You have not submitted your notes");
    }
  };

  return (
    <>
      <CssBaseline />
      <form onSubmit={handleSubmitTextArea}>
        <TextField
          variant="outlined"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          style={stylingObject.form}
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
    </>
  );
}
