import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useState } from "react";
import pic from "../../Assets/defaultImage.jpg";
import { jwtDecode } from "jwt-decode";

import { updatePersonalInformation } from "../../Apis/userApi";

const COLOR = process.env.REACT_APP_APPLICATION_THEME;

export default function Profile() {
  const [profilePic, setProfilePic] = useState(pic);
  const userToken = jwtDecode(localStorage.getItem("authToken"));
  const navbarPicture = userToken ? userToken.profilePicture : pic; //conditional picture rendering
  const name = userToken ? `${userToken.name}'s Profile` : `My Profile`;
  const [formData, setFormData] = useState({
    name: userToken.name || "",
    email: userToken.email || "",
    mobileNumber: userToken.mobileNumber || "",
  });

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePersonalInfoSave = async () => {
    try {
      await updatePersonalInformation(userToken._id, formData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4, mt: 5 }}>
      {/* Profile Picture Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Avatar
          src={navbarPicture}
          sx={{ width: 200, height: 200, mb: 2, border: `3px solid ${COLOR}` }}
        />
        <label htmlFor="upload-profile-pic">
          <input
            hidden
            accept="image/*"
            id="upload-profile-pic"
            type="file"
            onChange={handleImageChange}
          />
          <IconButton color="primary" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
        <Typography variant="h4" sx={{ color: "white", mt: 1 }}>
          {name}
        </Typography>
      </Box>

      {/* Personal Information Card */}
      <Card sx={{ mb: 3, borderRadius: 5, padding: 2 }}>
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: COLOR, mb: 2, fontWeight: "bold" }}
          >
            Personal Information
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="name"
                label="Name"
                onChange={handleChange}
                value={formData.name}
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }} sx={{ width: 270 }}>
              <TextField
                fullWidth
                name="email"
                label="Email"
                onChange={handleChange}
                value={formData.email}
                disabled
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                name="mobileNumber"
                label="Mobile Number"
                onChange={handleChange}
                value={formData.mobileNumber}
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: COLOR, borderRadius: 4 }}
            onClick={handlePersonalInfoSave}
          >
            Save
          </Button>
        </CardContent>
      </Card>

      {/* Address Card */}
      <Card sx={{ mb: 3, borderRadius: 5, padding: 2 }}>
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: COLOR, mb: 2, fontWeight: "bold" }}
          >
            Address
          </Typography>
          <TextField
            fullWidth
            label="Delivery Address"
            defaultValue={userToken.location}
            multiline
            rows={2}
          />
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: COLOR, borderRadius: 4 }}
          >
            Save
          </Button>
        </CardContent>
      </Card>

      {/* Payment Method Card */}
      <Card sx={{ mb: 3, borderRadius: 5, padding: 2 }}>
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: COLOR, mb: 2, fontWeight: "bold" }}
          >
            Payment Method
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Card Number"
                defaultValue="**** **** **** 1234"
              />
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <TextField
                fullWidth
                label="Expiry Date"
                defaultValue="12/25"
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: COLOR, borderRadius: 4 }}
          >
            Save
          </Button>
        </CardContent>
      </Card>

      {/* Password Change Card */}
      <Card sx={{ mb: 3, borderRadius: 5, padding: 2 }}>
        <CardContent>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ color: COLOR, mb: 2, fontWeight: "bold" }}
          >
            Change Password
          </Typography>
          <TextField fullWidth type="password" label="Current Password" />
          <TextField
            type="password"
            fullWidth
            label="New Password"
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: COLOR, borderRadius: 4 }}
          >
            Save
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
