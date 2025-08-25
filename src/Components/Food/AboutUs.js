import { Container, Box, Typography, Grid, Card, CardContent } from "@mui/material";

export default function AboutUs() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header */}
      <Box textAlign="center" sx={{mb:6, mt: 4}}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" color="grey">
          Welcome to <strong>goFood</strong> — your one-stop solution for delicious meals, 
          delivered fast and fresh to your doorstep.
        </Typography>
      </Box>

      {/* Mission & Vision */}
      <Grid container spacing={6}>
        <Grid item xs={6} md={4} size={6}>
          <Card sx={{ p: 2, height: "100%", borderRadius: 10}}>
            <CardContent sx={{textAlign:"center"}}>
              <Typography variant="h5" gutterBottom fontWeight="bold">
                Our Mission
              </Typography>
              <Typography variant="body1" color="text.secondary">
                At goFood, our mission is to connect people with their favorite restaurants 
                and provide them with a seamless food ordering experience. We strive to make 
                your meals convenient, affordable, and enjoyable.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={6} md={4} size={6}>
          <Card sx={{ p: 2, height: "100%",borderRadius: 10 }} >
            <CardContent sx={{textAlign:"center"}}>
              <Typography variant="h5" gutterBottom fontWeight="bold" >
                Our Vision
              </Typography>
              <Typography variant="body1" color="text.secondary">
                We envision a world where everyone can enjoy their favorite food anytime, 
                anywhere. By leveraging technology, we aim to revolutionize the way people 
                discover, order, and enjoy food.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Why Choose Us */}
      <Box mt={8} textAlign="center">
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Why Choose goFood?
        </Typography>
        <Typography variant="body1" color="grey" sx={{ maxWidth: "700px", mx: "auto" }}>
          We partner with top restaurants, ensure fast delivery, and provide a wide variety of cuisines 
          to satisfy every craving. With user-friendly features, secure payments, and 
          24/7 customer support, goFood makes food delivery stress-free and enjoyable.
        </Typography>
      </Box>
    </Container>
  );
}
