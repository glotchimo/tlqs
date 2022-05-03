import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

const styles = {
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

export default (props) => {
  return (
    <Card sx={{ minWidth: 275 }} style={styles.cardColors}>
      <CardContent>
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
          <h2>{props.topic}</h2>
          <h2>{props.course}</h2>
          <h2>{props.description}</h2>
        </div>
      </CardContent>
    </Card>
  );
};
