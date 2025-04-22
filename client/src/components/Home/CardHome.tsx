import "./CardHome.css";
import { Link } from "react-router";

interface Recette {
  strMealThumb: string;
  strArea: string;
  strMeal: string;
  idMeal: string;
  onRefreshClick: React.MouseEventHandler<HTMLButtonElement>;
}

function CardHome({
  strMealThumb,
  strArea,
  strMeal,
  idMeal,
  onRefreshClick,
}: Recette) {
  return (
    <figure className="Card_Home">
      <Link to={`/Recipe/${idMeal}`}>
        <img
          src={strMealThumb}
          alt={`${strArea} ${strMeal} ${idMeal}`}
          style={{ cursor: "pointer" }}
        />
      </Link>
      <div>
        <p>{strArea} </p> <br /> <h2>{strMeal}</h2>
      </div>
      <button onClick={onRefreshClick} type="button">
        Another recipe 🍽️
      </button>
    </figure>
  );
}

export default CardHome;
