import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
const styles = {
  form: {
      marginTop: "10px",
      color:"#ffffff", 
      background: "#808080",  
  },
  button: {
    bgcolor: "#808080",
    hover: "#ffa31a",
    "&:hover": {
      bgcolor: "#ffa31a",
    },   
      marginTop: "20px",

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
        fullWidth
        rows={6}
        multiline
        sx={styles.form}
      />
      <Button
        variant="contained"
        color="primary"
      type="submit"
      sx={styles.button}
      >
        Submit Notes
      </Button>
    </form>
  );
}
