import { useEffect, useState } from "react";
import Card from "../Components/Food/Card";
import Carousel from "../Components/Food/HomePageCarousel";
import Grid from "@mui/material/Grid";
import { getFood } from "../Apis/foodApi";
import { Typography } from "@mui/material";

export default function Home() {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await getFood();
        setFoodItems(response); 
      } catch (err) {
        console.error("Error fetching food:", err);
      }
    };

    fetchFood();
  }, []);

  return (
    <>
      <Carousel />
      <Typography variant="h4" sx={{textAlign:"center", mt:3, fontWeight:700}}> Current Favourites</Typography>
      <Grid container spacing={2} sx={{ ml: 20 }}>
        {foodItems.map((item) => (
          <Grid size={4} key={item._id}>
            <Card food={item} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
