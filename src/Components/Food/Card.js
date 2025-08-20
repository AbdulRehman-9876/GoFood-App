import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import foodItem from "../../Assets/roast_food.webp";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, mt:3 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={foodItem}
          alt="Food Item"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Roast Beef
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Tender, juicy roasted beef, slow-cooked to perfection and bursting
            with rich, savory flavor.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
