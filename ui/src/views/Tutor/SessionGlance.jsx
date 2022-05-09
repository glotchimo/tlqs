import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TutorForm from "./TutorForm";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import Grid from "@mui/material/Grid";

const styles = {
  sessionGlance: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#292929",
    color: "#fff",
    height: "100vh",
    width: "100vw",
  },
  personIcon: {
    fontSize: "100px",
    color: "#ffa31a",
  },

  container: {
    backgroundColor: "#292929",
    color: "#fff",
    height: "100vh",
    width: "100vw",
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

  const showStudentInformation = () => {
    return (
    <Box sx={{ textAlign: "justify", m: 1 }}>
      <div style={styles.sessionGlance}>
        <Grid item xs={4}>
          <h2>{props.name}</h2>
          <PersonIcon style={styles.personIcon} />
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

        <Grid item xs={4}>
          <h2>{props.description}</h2>
        </Grid>
      </div>
          </Box>
    );
  };



  return (
    <>
      <Grid container spacing={1}>
        <Grid container item>
            {showStudentInformation()}
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
