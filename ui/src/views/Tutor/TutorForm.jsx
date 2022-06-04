import * as React from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
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

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#B7142E",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B7142E",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#292929",
    },
    "&:hover fieldset": {
      borderColor: "#A41029",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#B7142E",
    },
  },
});

const styles = {
  textArea: {
    style: {
      lineHeight: 1.5,
      fontSize: 22,
      color: "#000000",
    },
  },
  typography: {
    fontSize: 20,
  },
  button: {
    bgcolor: "#b7142e",
    hover: "#b7142e",
    "&:hover": {
      bgcolor: "#A41029",
    },
    m: 3,
  },
  dialogContent: {
    color: "#000000",
    fontSize: 20,
  },
  dialog: {
    "*::-webkit-scrollbar": {
      width: "8px",
      height: "8px",
    },
    "*::-webkit-scrollbar-track": {
      backgroundColor: "rgba(0,0,0,0.4)",
      borderRadius: "10px",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "#b7142e",
      outline: "10px",
    },
    m: 2,
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
          <CssTextField
            sx={{ m: 3 }}
            rows={20}
            multiline
            label="Tutor Notes"
            placeholder="How did the session go?"
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
        sx={styles.dialog}
        onClose={() => setOpen(false)}
      >
        <DialogContent dividers style={styles.dialogContent}>
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
