import React, { useState } from "react";
import {
  Box,
  TextField,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
} from "@mui/material";
import RestaurantPageCarousel from "./RestaurantPageCarousel";
const restaurantsData = [
  {
    id: 1,
    name: "Pizza Palace",
    description: "Best pizzas in town!",
    image: "https://source.unsplash.com/400x200/?pizza",
  },
  {
    id: 2,
    name: "Burger Hub",
    description: "Juicy burgers and fries",
    image: "https://source.unsplash.com/400x200/?burger",
  },
  {
    id: 3,
    name: "Sushi World",
    description: "Fresh sushi and rolls",
    image: "https://source.unsplash.com/400x200/?sushi",
  },
  {
    id: 4,
    name: "Tandoori Treats",
    description: "Authentic desi taste",
    image: "https://source.unsplash.com/400x200/?tandoori",
  },
];

export default function Restaurants() {
  const [search, setSearch] = useState("");

  const filteredRestaurants = restaurantsData.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <RestaurantPageCarousel />

      <Box sx={{ p: 3, }}>
        {/* Search Bar */}
        <TextField
          label="Search Restaurants"
          variant="filled"
          
          fullWidth
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          sx={{ mb: 3, zIndex: 2, backgroundColor: "white", mt: 1}}
        />

        {/* Restaurant Cards */}
        <Grid container spacing={3}>
          {filteredRestaurants.map((restaurant) => (
            <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="180"
                  image={restaurant.image}
                  alt={restaurant.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {restaurant.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {restaurant.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
