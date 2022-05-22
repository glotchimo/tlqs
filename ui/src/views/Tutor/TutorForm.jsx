import * as React from "react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import ReactMarkdown from "react-markdown";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

const styles = {
  textArea: {
    style: {
      lineHeight: 1.5,
      fontSize: 20,
      color: "#000000",
    },
  },
  typography: {
    fontSize: 20,
  },
  button: {
    bgcolor: "#b7142e",
    hover: "#b7142e",
    marginRight: "10px",
    "&:hover": {
      bgcolor: "#A41029",
    },
    marginTop: "20px",
  },
  modalStyle: {
    color: "#ffffff",
    fontSize: 20,
    backgroundColor: "#292929",
  },
};

export default function TutorForm(props) {
  const [open, setOpen] = React.useState(false);
  const [tutorInput, setTutorInput] = useState("");

  const handleChange = (event) => {
    setTutorInput(event.target.value);
  };
  const handleButtonClick = () => {
    if (tutorInput.length === 0) {
      alert("Please enter some text into the preview box before showing.");
    } else {
      setOpen(true);
    }
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
    <>
      <form onSubmit={() => patchCurrentSession(props.id)}>
        <FormControl fullWidth>
          <TextField
            multiline={true}
            rows={25}
            placeholder="Where do I begin..."
            onChange={handleChange}
            inputProps={styles.textArea}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={styles.button}
        >
          Submit Notes
        </Button>
        <Button
          sx={styles.button}
          variant="contained"
          onClick={() => handleButtonClick()}
        >
          Show Preview
        </Button>
      </form>
      <Dialog
        open={open}
        fullWidth
        maxWidth="md"
        wordWrap="break-word"
        onClose={() => setOpen(false)}
      >
        <DialogContent dividers style={styles.modalStyle}>
          <Box sx={{ textAlign: "left", m: 5, fontSize: "100em" }}>
            <Typography gutterBottom style={styles.typography}>
              <ReactMarkdown>{tutorInput}</ReactMarkdown>
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}
