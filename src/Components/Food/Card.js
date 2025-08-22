import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import Rating from "@mui/material/Rating";

export default function ActionAreaCard(props) {
  return (
    <Card
      sx={{
        width:450,
        ml:-8,
        mt: 3,
        borderRadius: 6,
        "&:hover img": {
          transform: "scale(1.05)", // zoom in
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image={props.food.image}
          alt="Food Item"
          sx={{
            transition: "transform 0.5s ease", // smooth effect
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 600}}>
           {props.food.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {props.food.description}
          </Typography>
          <Rating
            name="read-only"
            precision={0.5}
            value={props.food.rating + 4.5}
            readOnly
            size="small"
            sx={{ mt: 1 }}
          />
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
