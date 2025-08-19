import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import animeFoodWallpaper from "../../Assets/animeFoodWallpaper.jpg";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";

export default function ImgMediaCard() {
  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 800, mt: 16, borderRadius:4 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={animeFoodWallpaper}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Register
          </Typography>

          <TextField
            id="name"
            label="Name"
            variant="standard"
            fullWidth
            sx={{ mb: 2}}
          />
          <TextField
            id="email"
            label="Email"
            variant="standard"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            id="password"
            label="Password"
            variant="standard"
            fullWidth
            sx={{ mb: 2 }}
          />
          <TextField
            id="confirm_password"
            label="Confirm Password"
            variant="standard"
            fullWidth
            sx={{ mb: 2 }}
          />
        </CardContent>
        <CardActions>
          <Button color="success" size="small" variant="contained" sx={{ml:22, mb:3, width:150, borderRadius: 3}}>
            Submit
          </Button>
          <Button size="small" variant="text"sx={{ml:3, mb:3}}> 
            Already a User
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
