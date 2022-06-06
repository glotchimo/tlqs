import { React } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const styles = {
  textAlign: {
    textAlign: "center",
    fontFamily: "IBM Plex Sans",
    fontSize: "2.5vw",
    fontWeight: 700,
    color: "white",
    m: 3,
  },
};

function SplashPage(prop) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: "auto",
        width: "auto",
        mt: "35vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#000000",
          p: 3,
        }}
      >
        <Box className="left" sx={{}}>
          <Typography variant="h4" sx={styles.textAlign}>
            {prop.status}
          </Typography>
          <Typography variant="subtitle1" sx={styles.textAlign}>
            {prop.message}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default SplashPage;
