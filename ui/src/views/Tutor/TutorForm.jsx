import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
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
  const [tutorInput, setTutorInput] = useState("");

  const patchCurrentSession = async (sessionId) => {
    await fetch(`/sessions/${sessionId}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        retrospective: tutorInput,
        completed: true,
      }),
    });
  };

  return (
    <>
      <form onSubmit={patchCurrentSession(prop.id)}>
        <TextField
          variant="outlined"
          value={tutorInput}
          onChange={(event) => setTutorInput(event.target.value)}
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
