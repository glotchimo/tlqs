import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: "center",
    margintop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
}));

export default (props) => {
    return (
        <Item>
    <Typography variant="h6" gutterBottom component="div">
        {props.name}
      </Typography>
    <Typography variant="h6" gutterBottom component="div">
        {props.email}
      </Typography>
    <Typography variant="h6" gutterBottom component="div">
        {props.topic}
      </Typography>
    <Typography variant="h6" gutterBottom component="div">
        {props.course}
      </Typography>
        </Item>
  );
};
