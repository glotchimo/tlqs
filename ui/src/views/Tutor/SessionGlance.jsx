import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TutorForm from "./TutorForm";
import PersonIcon from "@mui/icons-material/Person";
import Grid from "@mui/material/Grid";

const styles = {
  sessionGlance: {
    backgroundColor: "#292929",
    height: "100vh",
    display: 'flex',
    color: "#fff",
  },
  personIcon: {
    fontSize: "100px",
    color: "#b7142e",
  },
  buttonSx: {
    bgcolor: "#343a40",
    hover: "#ffa31a",
    "&:hover": {
      bgcolor: "#b7142e",
    },
  },
  modalStyle: {
    color: "#fff",
    position: "absolute",
    backgroundColor: "#292929",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    border: "2px solid #343a40",
    align: "center",
    boxShadow: 24,
    p: 4,
  },
};

export default (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Grid
        style={styles.sessionGlance}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={3} md={5}>
          <Typography variant="h3" component="div" gutterBottom>
            {props.name}
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            <PersonIcon style={styles.personIcon} />
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            <h2>{props.email}</h2>
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            <h2>{props.topic}</h2>
          </Typography>
          <Typography variant="subtitle1" gutterBottom component="div">
            <h2>{props.course}</h2>
          </Typography>
          <Button
            sx={styles.buttonSx}
            variant="contained"
            onClick={() => setOpen(true)}
          >
            Mark Completed
          </Button>
        </Grid>

        <Grid item xs={4}>
          <Box sx={{ textAlign: "justify", m: 5 }}>
            <Typography variant="body1" gutterBottom>
              <h2>{props.description}</h2>
            </Typography>
          </Box>
        </Grid>
      </Grid>

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
