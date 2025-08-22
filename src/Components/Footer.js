import React from "react";
import { Box, Container, Typography, IconButton, Link } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        mt: 8,
        background:
          "linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0.5), rgba(0,0,0,0))",
        boxShadow: "none", // removes default shadow
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        {/* Left side: Brand / Copyright */}
        <Typography variant="body2" color="white">
          © {new Date().getFullYear()} GoFood, Inc. All rights reserved.
        </Typography>

        {/* Right side: Social Links */}
        <Box>
          <IconButton
            component="a"
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <Facebook />
          </IconButton>

          <IconButton
            component="a"
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            component="a"
            href="https://www.linkedin.com/in/abdulrehman-butt-/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ color: "white" }}
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
