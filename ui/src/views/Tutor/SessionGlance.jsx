import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TutorForm from "./TutorForm";
import Grid from "@mui/material/Grid";

const styles = {
  sessionGlance: {
    backgroundColor: "#292929",
    height: "100vh",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  studentTitle: {
    fontSize: "4.5em",
    fontWeight: "bold",
    color: "#b7142e",
  },
};

export default (props) => {
  return (
    <>
      <Grid container>
        <Grid item xs={6} sx={{ height: "100vh" }}>
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="left"
            justifyContent="center"
          >
            <div>
              <Box sx={{ textAlign: "left", m: 5 }}>
                <Typography
                  variant="h3"
                  component="div"
                  style={styles.studentTitle}
                  gutterBottom
                >
                  {props.name}
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
              </Box>
            </div>
            <div>
              <Box sx={{ textAlign: "left", m: 5 }}>
                <Typography variant="subtitle1" gutterBottom>
                  <h2>{props.description}</h2>
                </Typography>
              </Box>
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            backgroundColor: "white",
            height: "100vh",
            "*::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
            },
            "*::-webkit-scrollbar-track": {
              backgroundColor: "rgba(0,0,0,0.4)",
              borderRadius: "10px",
            },
            "*::-webkit-scrollbar-thumb": {
              backgroundColor: "#dfdfdf",
              outline: "10px",
            },
          }}
        >
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              sx={{
                width: "90%",
                height: "85vh",
                mt: "5vh",
                backgroundColor: "white",
                overflow: "auto",
              }}
            >
              <TutorForm id={props.id}/>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
