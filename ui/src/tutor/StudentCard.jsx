import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const colors = {
  cardColors: {
    backgroundColor: "#525E75",
    color: "#ffffff",
  },
};

var stylingObject = {
  container: {
    backgroundColor: "#525E75",
    color: "#fff",
    height: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  personIcon: {
    width: "125px",
    height: "125px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
  },
  studentDetails: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

export default function BasicCard(prop) {
  return (
    <Card sx={{ minWidth: 275 }} style={colors.cardColors}>
      <CardContent>
        <Typography style={stylingObject.studentDetails} gutterBottom variant="h2" component="h2">
          {prop.name}
        </Typography>
        <PersonIcon style={stylingObject.personIcon} />
        <div style={stylingObject.studentDetails}>
          <h2>Email: {prop.email}</h2>
          <h2>Description: {prop.description}</h2>
          <h2>Retrospective: {prop.retrospective}</h2>
        </div>
      </CardContent>
    </Card>
  );
}
