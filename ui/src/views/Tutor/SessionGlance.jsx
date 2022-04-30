import * as React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TutorForm from "./TutorForm";
import Avatar from "@mui/material/Avatar";

const styles = {
  personIcon: {
    width: "125px",
    height: "125px",
    margin: "0 auto",
  },
  studentDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  modalStyle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#525E75",
    border: "2px solid #000",
    align: "center",
    color: "#fff",
    boxShadow: 24,
    p: 4,
  },
};

export default (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div>
        <Typography
          style={styles.studentDetails}
          gutterBottom
          variant="h2"
          component="h2"
        >
          {props.name}
        </Typography>
        <Avatar style={styles.personIcon}>
          {props.name.charAt(0).toUpperCase()}
        </Avatar>
        <div style={styles.studentDetails}>
          <h2>{props.email}</h2>
          <h2>{props.course}</h2>
          <h2>{props.topic}</h2>
          <h2>{props.description}</h2>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Mark Completed
          </Button>
        </div>
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
