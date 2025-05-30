import "./RecipeListCard.css";
import { Link } from "react-router";

interface RecipeListCardProps {
  recipeName: string;
  picture: string;
  idMeal: string;
}

function RecipeListCard({ recipeName, picture, idMeal }: RecipeListCardProps) {
  return (
    <figure>
      <Link to={`/recipe/${idMeal}`} className="recipe-list">
        <img src={picture} alt={recipeName} />
        <figcaption>{recipeName}</figcaption>
      </Link>
    </figure>
  );
}

export default RecipeListCard;
