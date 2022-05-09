import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TutorForm from "./TutorForm";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
const styles = {
  container: {
    backgroundColor: "#292929",
    color: "#fff",
    height: "100vh",
    width: "100vw",
  },
  studentDetails: {
    color: "#ffa31a",
  },

  avatarSx: {
    bgcolor: "#808080",
    fontSize: 30,
    size: 100,
    height: 120,
    width: 120,
  },

  buttonSx: {
    bgcolor: "#808080",
    hover: "#ffa31a",
    "&:hover": {
      bgcolor: "#ffa31a",
    },
  },
};

export default (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div style={styles.container}>
        <Grid container>
          <Grid item xs={6}>
            <h2>{props.name}</h2>
            <Avatar style={styles.avatarSx}>
              {props.name.charAt(0).toUpperCase()}
            </Avatar>
            <h2>{props.email}</h2>
            <h2>{props.course}</h2>
            <h2>{props.topic}</h2>
            <Button
              sx={styles.buttonSx}
              variant="contained"
              onClick={() => setOpen(true)}
            >
              Mark Completed
            </Button>
          </Grid>
          <Grid item xs={6}>
            <h2>{props.description}</h2>
          </Grid>
        </Grid>
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.modalStyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Current Student: {props.name}
          </Typography>
          <TutorForm id={props.id} />
        </Box>
      </Modal>
    </>
  );
};
