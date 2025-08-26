import { Box, Typography, Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import image1 from "../../Assets/restaurantPic_1.png";
import image2 from "../../Assets/restaurantPic_2.jpg";

import "swiper/css";
import "swiper/css/effect-fade";
import { useNavigate } from "react-router-dom";
const COLORS = process.env.REACT_APP_APPLICATION_THEME;
const images = [image1, image2];

export default function Carousel() {
  const navigate = useNavigate();
  return (
    <Swiper
      modules={[Autoplay, EffectFade]} // ✅ register modules
      effect="fade" // fade transition
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      allowTouchMove={false} // disable manual swipe
      loop={true} //  infinite loop
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <Box
            sx={{
              position: "relative",
              height: "100vh",
              overflow: "hidden",
            }}
          >
            <img
              src={img}
              alt={`Slide ${index}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: -1,
                filter: "brightness(30%)",
              }}
            />

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
                Restaurants
              </Typography>
              <Typography variant="subtitle1" sx={{ mt: 2 }}>
                Register your restaurant today and let food lovers discover you!
              </Typography>
              <Button
                variant="contained"
                sx={{ mt: 3, backgroundColor: COLORS, borderRadius: 3, fontWeight:"bold" }}
                onClick={() => navigate("/registerRestaurant")}
              >
                Register Now
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
