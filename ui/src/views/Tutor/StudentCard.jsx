import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
const stylingObject = {
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
  cardColors: {
    backgroundColor: "#525E75",
    color: "#ffffff",
  },
};

export default function StudentCard(prop) {
  return (
    <Card sx={{ minWidth: 275 }} style={stylingObject.cardColors}>
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
          <h2>{prop.email}</h2>
          <h2>{prop.course}</h2>
          <h2>{prop.description}</h2>
        </div>
      </CardContent>
    </Card>
  );
}
