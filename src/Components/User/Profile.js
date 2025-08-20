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
import pic from "../../Assets/Anime_Pfp.jpeg"
const COLOR = process.env.REACT_APP_APPLICATION_THEME;

export default function Profile() {
  const [profilePic, setProfilePic] = useState(pic);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* Profile Picture Section */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
        <Avatar
          src={profilePic}
          sx={{ width: 130, height: 130, mb: 2, border: `3px solid ${COLOR}` }}
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
        <Typography variant="h5" sx={{ color: "white", mt: 1 }}>
          My Profile
        </Typography>
      </Box>

      {/* Personal Information Card */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ color: COLOR }}>
            Personal Information
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Name" defaultValue="John Doe" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Email" defaultValue="john@example.com" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Phone Number" defaultValue="+1234567890" />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: COLOR, borderRadius: 3 }}
          >
            Save
          </Button>
        </CardContent>
      </Card>

      {/* Address Card */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ color: COLOR }}>
            Address
          </Typography>
          <TextField
            fullWidth
            label="Delivery Address"
            defaultValue="123 Main Street, City"
            multiline
            rows={2}
          />
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: COLOR, borderRadius: 3 }}
          >
            Save
          </Button>
        </CardContent>
      </Card>

      {/* Payment Method Card */}
      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ color: COLOR }}>
            Payment Method
          </Typography>
          <TextField
            fullWidth
            label="Card Number"
            defaultValue="**** **** **** 1234"
          />
          <TextField
            fullWidth
            label="Expiry Date"
            defaultValue="12/25"
            sx={{ mt: 2 }}
          />
          <Button
            variant="contained"
            sx={{ mt: 2, backgroundColor: COLOR, borderRadius: 3 }}
          >
            Save
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}
