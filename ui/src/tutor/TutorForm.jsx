import * as React from "react";
import { useState } from "react";
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

  //Once the back-end is sorted out make the patch request to retrospetive
  const patchCurrentSession = async (sessionId) => {
    const response = await fetch(
      `http://localhost:8080/sessions/${sessionId}/`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tutor: {
            retrospective: value,
            completed: true,
          },
        }),
      }
    );
    console.log(response.status)

    if (response.status === 200) {
      console.log("Successful patch request");
    }
  };

  const deleteCurrentSession = async (sessionId) => {
    const response = await fetch(
      `http://localhost:8080/sessions/${sessionId}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.status === 200) {
      location.reload();
    }
  };

  const handleSubmitTextArea = (event) => {
    event.preventDefault;
    if (confirm("Are you sure you want to submit with notes?")) {
      patchCurrentSession(prop.id);
    }
  };

  const handleSubmitNoTextArea = (event) => {
    event.preventDefault();
    if (confirm("Are you sure you want to mark complete without notes?")) {
      deleteCurrentSession(prop.id);
    } else {
      alert("Session not deleted");
    }
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
