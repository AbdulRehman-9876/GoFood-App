import React, { useState } from "react";
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
import IconButton from "@mui/material/IconButton";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import InputAdornment from "@mui/material/InputAdornment";

export default function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((prev) => !prev);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((prev) => !prev);


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
            <Typography gutterBottom variant="h5" component="div" fontWeight={600} textAlign={"center"}>
              Registeration Page
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
              type="email"
              id="email"
              label="Email"
              variant="standard"
              fullWidth
              sx={{ mb: 2 }}
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              type="number"
              id="number"
              label="Phone Number"
              variant="standard"
              fullWidth
              sx={{ mb: 2 }}
              value={formData.number}
              onChange={handleChange}
            />
            <TextField
              type={showPassword ? "text" : "password"}
              id="password"
              label="Password"
              variant="standard"
              fullWidth
              sx={{ mb: 2 }}
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              type={showConfirmPassword ? "text" : "password"}
              id="confirm_password"
              label="Confirm Password"
              variant="standard"
              fullWidth
              sx={{ mb: 1 }}
              value={formData.confirm_password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowConfirmPassword} edge="end">
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
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
