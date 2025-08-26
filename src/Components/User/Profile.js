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
import pic from "../../Assets/defaultImage.jpg"
import { jwtDecode } from "jwt-decode";
const COLOR = process.env.REACT_APP_APPLICATION_THEME;

export default function Profile() {
  const [profilePic, setProfilePic] = useState(pic);
const userToken = jwtDecode(localStorage.getItem("authToken"))
const navbarPicture = userToken ? userToken.profilePicture : pic //conditional picture rendering
const name = userToken ? `${userToken.name}'s Profile` : `My Profile`


  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePic(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Container maxWidth="md" sx={{ py: 4, mt:5 }}>
      {/* Profile Picture Section */}
      <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 4 }}>
        <Avatar
          src={navbarPicture}
          sx={{ width: 140, height: 140, mb: 2, border: `3px solid ${COLOR}` }}
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
      <Card sx={{ mb: 3 ,borderRadius:5, padding: 2}}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ color: COLOR, mb:2,fontWeight: 'bold'}}>
            Personal Information
          </Typography>
          <Grid container spacing={2}>
            <Grid size={{xs:12, sm: 6}}>
              <TextField fullWidth label="Name" defaultValue={userToken.name}/>
            </Grid>
            <Grid size={{xs:12, sm: 6}} sx={{width:270}}>
              <TextField fullWidth label="Email" defaultValue={userToken.email} disabled/>
            </Grid>
            <Grid  size={{xs:12, sm: 6}}>
              <TextField fullWidth label="Phone Number" defaultValue={userToken.mobileNumber}  />
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

      {/* Address Card */}
      <Card sx={{ mb: 3 ,borderRadius:5, padding: 2}}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ color: COLOR, mb:2,fontWeight: 'bold'}}>
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
      <Card sx={{ mb: 3,borderRadius:5, padding: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ color: COLOR, mb:2,fontWeight: 'bold' }}>
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
            sx={{ mt: 2, backgroundColor: COLOR, borderRadius: 4 }}
          >
            Save
          </Button>
        </CardContent>
      </Card>

       {/* Password Change Card */}
      <Card sx={{ mb: 3,borderRadius:5, padding: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom sx={{ color: COLOR, mb:2,fontWeight: 'bold' }}>
            Change Password
          </Typography>
          <TextField
            fullWidth
            type="password"
            label="Current Password"
          />
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
