import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import video from "../../Assets/anime_cooking.mp4"
const COLORS = process.env.REACT_APP_APPLICATION_THEME
export default function Carousel() {
  return (
    <Swiper loop autoplay={{ delay: 4000 }}>
      {/* Slide 1 with video */}
      <SwiperSlide>
        <Box sx={{ position: "relative", height: "100vh", overflow: "hidden" }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
               filter: "brightness(50%)"
            }}
          > 
            <source src={video} type="video/mp4" />
          </video>

          {/* Overlay Content */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography variant="h3" fontWeight="bold">
              Fresh & Hot Meals
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              Delivered straight from the kitchen to your door.
            </Typography>
            <Button
              variant="contained"
              sx={{ mt: 3, backgroundColor: COLORS }}
            >
              Order Now
            </Button>
          </Box>
        </Box>
      </SwiperSlide>

      {/* You can add more SwiperSlide components with different videos */}
    </Swiper>
  );
}
