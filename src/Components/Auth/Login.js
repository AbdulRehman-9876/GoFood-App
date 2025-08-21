import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import animeFoodWallpaper from "../../Assets/loginAnimeFoodWallpaper.jpg";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router";
import { loginUser } from "../../Apis/authApi";
import { useState } from "react";

export default function ImgMediaCard() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleValidations = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      console.log(formData.email);
      alert("Empty Email Field");
      return false;
    } else if (formData.password.length <= 0) {
      alert("Empty Password Field");
      return false;
    } else {
      return true;
    }
  };
  const handleLogin = async () => {
    if (!handleValidations()) {
      return;
    }
    try {
      await loginUser(formData);
      navigate("/"); //return to home page if sucessfull
    } catch (err) {
      console.log(`Error fetching login api ${err}`);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <Container maxWidth="sm">
      <Card sx={{ maxWidth: 800, mt: 16, borderRadius: 4 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={animeFoodWallpaper}
        />
        <Container sx={{ mt: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Login
            </Typography>

            <TextField
              id="email"
              label="Email"
              variant="standard"
              fullWidth
              sx={{ mb: 2 }}
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              id="password"
              label="Password"
              variant="standard"
              fullWidth
              sx={{ mb: 2 }}
              value={formData.password}
              onChange={handleChange}
            />
          </CardContent>
        </Container>
        <CardActions>
          <Button
            color="success"
            size="large"
            variant="contained"
            sx={{ ml: 22, mb: 3, width: 150, height: 40, borderRadius: 3 }}
            onClick={handleLogin}
          >
            Submit
          </Button>
          <Button
            size="small"
            variant="text"
            sx={{ ml: 3, mb: 3 }}
            onClick={() => navigate("/register")}
          >
            Dont have an account?
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
