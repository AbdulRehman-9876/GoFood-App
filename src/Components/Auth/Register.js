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
import { useNavigate } from "react-router";
import { registerUser } from "../../Apis/authApi";

export default function ImgMediaCard() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirm_password: "",
  });

  const handleValidations = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.name.length <= 0) {
      alert("name cannot be empty");
      return false;
    } else if (!emailRegex.test(formData.email)) {
      console.log(formData.email);
      alert("email invalid");
      return false;
    } else if (formData.number.length <= 9) {
      alert("invalid number");
      return false;
    } else if (
      formData.password !== formData.confirm_password ||
      formData.password.length <= 0 ||
      formData.confirm_password.length <= 0
    ) {
      alert("password don't match");
      return false;
    } else {
      return true;
    }
  };
  const handleRegisteration = async () => {
    if (!handleValidations()) {
      return;
    }
    try {
      await registerUser(formData);
      navigate("/login");
    } catch (err) {
      console.log(`Error in fetching register api ${err}`);
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
      <Card sx={{ maxWidth: 900, mt: 10, borderRadius: 4 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={animeFoodWallpaper}
        />
        <Container sx={{ mt: 2 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Register
            </Typography>

            <TextField
              id="name"
              label="Name"
              variant="standard"
              fullWidth
              sx={{ mb: 2 }}
              value={formData.name}
              onChange={handleChange}
            />
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
              id="number"
              label="Phone Number"
              variant="standard"
              fullWidth
              sx={{ mb: 2 }}
              value={formData.number}
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
            <TextField
              id="confirm_password"
              label="Confirm Password"
              variant="standard"
              fullWidth
              sx={{ mb: 1 }}
              value={formData.confirm_password}
              onChange={handleChange}
            />
          </CardContent>
        </Container>

        <CardActions>
          <Button
            color="success"
            size="large"
            variant="contained"
            sx={{ ml: 22, mb: 3, width: 150, height: 40, borderRadius: 4 }}
            onClick={handleRegisteration}
          >
            Submit
          </Button>
          <Button
            size="small"
            variant="text"
            onClick={() => navigate("/login")}
            sx={{ ml: 3, mb: 3 }}
          >
            Already a User
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
