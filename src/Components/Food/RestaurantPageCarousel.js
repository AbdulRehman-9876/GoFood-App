import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import video from "../../Assets/restaurantPageCarousal.mp4"
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
               filter: "brightness(30%)"
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
            <Typography variant="h2" fontWeight="bold">
              Restaurant Page
            </Typography>
          </Box>
        </Box>
      </SwiperSlide>

      {/* You can add more SwiperSlide components with different videos */}
    </Swiper>
  );
}
