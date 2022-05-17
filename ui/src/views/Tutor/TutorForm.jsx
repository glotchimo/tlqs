import * as React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const styles = {
  form: {
    marginTop: "10px",
    color: "#ffffff",
    background: "#808080",
  },
  button: {
    bgcolor: "#343a40",
    hover: "#b7142e",
    "&:hover": {
      bgcolor: "#b7142e",
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

      <Box
        id="preview-container"
        sx={{ m: 1, border: "1px solid", borderRadius: "4px 4px" }}
      >
        <Box
          id="preview-box"
          sx={{
            minHeight: "20vh",
            m: 1,
            fontFamily: "IBM Plex Sans",
            wordWrap: "break-line",
            overflowWrap: "break-line",
          }}
        >
          //insert markdown editor tag here.
        </Box>
      </Box>

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
