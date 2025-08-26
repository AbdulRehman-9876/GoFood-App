import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useState } from "react";
import pic from "../../Assets/restaurantPic_2.jpg";
import { jwtDecode } from "jwt-decode";
const COLOR = process.env.REACT_APP_APPLICATION_THEME;

export default function RegisterRestaurant() {
  const [profilePic, setProfilePic] = useState(pic);
  const userToken = jwtDecode(localStorage.getItem("authToken"));
  const navbarPicture = pic;

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };
  return (
    <>
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
          <label htmlFor="upload-profile-pic">
            <input
              hidden
              accept="image/*"
              id="upload-profile-pic"
              type="file"
              onChange={handleImageChange}
            />
            <IconButton color="primary" component="span">
              <PhotoCamera sx={{mb:-55}}/>
            </IconButton>
          </label>
        </Box>

        {/* Restaurant Registeration Card */}
        <Card sx={{ mb: 3, borderRadius: 5}}>
          <CardMedia
            component="img"
            image={pic}
            alt="Food Item"
            sx={{
              transition: "transform 0.5s ease", // smooth effect
              height: {
                lg: 200,
                md: 200,
                sm: 180,
                xs: 170,
              },
            }}
          />
          <CardContent sx ={{padding: 4}}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                color: COLOR,
                mb: 4,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Restaurant Registeration Form
            </Typography>
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
                  label="Owner's Name"
                  defaultValue={userToken.name}
                  disabled
                />
              </Grid>

              <Grid size={{ xs: 12, sm: 6 }} sx={{ width: 270 }}>
                <TextField
                  fullWidth
                  label="Owner's Email"
                  defaultValue={userToken.email}
                  disabled
                />
              </Grid>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField
                  fullWidth
                  label="Owner's Contact Number"
                  defaultValue={userToken.mobileNumber}
                  disabled
                />
              </Grid>
            </Grid>

            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: COLOR, mb: 2, mt: 2, fontWeight: "bold" }}
            >
              Provide the following Information
            </Typography>

            <Grid container spacing={2}>
              <Grid size={{ xs: 12, sm: 6 }}>
                <TextField fullWidth label="Restaurant name" />
              </Grid>
              <TextField
                fullWidth
                label="Restaurant Address"
                multiline
                rows={2}
              />
              <TextField
                fullWidth
                label="Restaurant Description"
                multiline
                rows={2}
              />
            </Grid>
            <Button
              variant="contained"
              sx={{ mt: 2, mb:2, backgroundColor: COLOR, borderRadius: 4 }}
            >
              Register
            </Button>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
