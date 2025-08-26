import React from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

export default function LoadingPage() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CircularProgress size={60} color="white" />
      <Typography variant="h6" sx={{ mt: 2, color: "grey" }}>
        Loading, please wait...
      </Typography>
    </Box>
  );
}
