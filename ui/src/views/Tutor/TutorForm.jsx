import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const styles = {
  form: {
    color: "#FFFFFF",
    border: "#FFFFFF",
    marginTop: "10px",
  },
  button: {
    marginTop: "10px",
  },
};

export default function TutorForm(props) {
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
    <form onSubmit={() => patchCurrentSession(props.id)}>
      <TextField
        variant="outlined"
        onChange={(e) => setTutorInput(e.target.value)}
        style={styles.form}
        fullWidth
        rows={6}
        multiline
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        style={styles.button}
      >
        Submit Notes
      </Button>
    </form>
  );
}
