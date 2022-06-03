import * as React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#A41029",
  color: "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  margintop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const stylingObject = {
        cards:{


        }
}

export default (props) => {
  return (
    <Grid item>
      <Item>
      <Box sx={{ textAlign: "left", m: 5 }}>
          <Typography variant="h6" gutterBottom component="div">
            {props.name}
          </Typography>
          <Typography gutterBottom component="div">
            {props.email}
          </Typography>
          <Typography gutterBottom component="div">
            {props.topic}
          </Typography>
          <Typography gutterBottom component="div">
            {props.course}
          </Typography>
        </Box>
      </Item>
    </Grid>
  );
};
