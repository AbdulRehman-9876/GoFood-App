import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Card from "../Components/Food/Card";
import Carousel from "../Components/Food/Carousel";
import Grid from "@mui/material/Grid";

export default function Home() {
  return (
    <>
        <Carousel />

        <Grid container spacing={2} sx={{ ml: 20 }}>
          <Grid size={4}>
            <Card />
          </Grid>
          <Grid size={4}>
            <Card />
          </Grid>
          <Grid size={4}>
            <Card />
          </Grid>
          <Grid size={4}>
            <Card />
          </Grid>
          <Grid size={4}>
            <Card />
          </Grid>
          <Grid size={4}>
            <Card />
          </Grid>
        </Grid>
    </>
  );
}
