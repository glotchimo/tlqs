import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

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

export default function StudentCard(prop) {
  return (
    <Card sx={{ minWidth: 275 }} style={colors.cardColors}>
      <CardContent>
        <Typography
          style={stylingObject.studentDetails}
          gutterBottom
          variant="h2"
          component="h2"
        >
          {prop.name}
        </Typography>
        <Avatar style={stylingObject.personIcon}>
          {prop.name.charAt(0).toUpperCase()}
        </Avatar>
        <div style={stylingObject.studentDetails}>
          <h2>Email: {prop.email}</h2>
          <h2>Class: {prop.course}</h2>
          <h2>Description: {prop.description}</h2>
          <h2>Retrospective: {prop.retrospective}</h2>
        </div>
      </CardContent>
    </Card>
  );
}
