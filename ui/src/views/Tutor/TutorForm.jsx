import * as React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import FormControl from "@mui/material/FormControl";
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
    const [problemPreview, setProblemPreview] = useState("");

    const handleChange = (event) => {
        setTutorInput(event.target.value);
        setProblemPreview(tutorInput);
        console.log(tutorInput);
  };

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
    <FormControl fullWidth>
      <form onSubmit={() => patchCurrentSession(props.id)}>
      <TextField
      variant="outlined"
      onChange={handleChange}
        style={styles.form}
        fullWidth
        rows={6}
        multiline
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
            }}>
            <ReactMarkdown>{tutorInput}</ReactMarkdown>
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
    </FormControl>
  );
}
