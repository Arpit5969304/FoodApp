import { NavLink } from "react-router";
import "./Meal.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Meal({ detail }) {
  // ⏳ Loading state
  if (!detail) {
    return <h2 className="statusMsg">Loading dishes...</h2>;
  }

  // ❌ No data found state
  if (detail.length === 0) {
    return (
      <h2 className="statusMsg notFound">
        😔 Dish not found. Try another search!
      </h2>
    );
  }

  // ✅ Data available
  return (
    <div className="mealGrid">
      {detail.map((currItem) => (
        <Card className="mealCard" key={currItem.idMeal}>
          <CardMedia
            component="img"
            height="200"
            image={currItem.strMealThumb}
            alt={currItem.strMeal}
          />

          <CardContent>
            <Typography variant="h6" align="center">
              {currItem.strMeal}
            </Typography>
          </CardContent>

          <CardActions className="cardActions">
            <NavLink to={`${currItem.idMeal}`} className="link">
              <Button variant="contained" color="warning">
                View Recipe
              </Button>
            </NavLink>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

