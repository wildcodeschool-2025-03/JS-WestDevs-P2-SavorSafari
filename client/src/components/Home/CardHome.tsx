import "./CardHome.css";
import { Link } from "react-router";
interface Recette {
  strMealThumb: string;
  strArea: string;
  strMeal: string;
  idMeal: string;
  getRecette: () => void;
}

function CardHome({
  strMealThumb,
  strArea,
  strMeal,
  idMeal,
  getRecette,
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
        <p>{strArea} </p>
      </div>
      <div className="titre-container">
        <div>
          <h2>{strMeal}</h2>
        </div>
        <div>
          <button onClick={getRecette} type="button">
            Another recipe 🍽️
          </button>
        </div>
      </div>
    </figure>
  );
}

export default CardHome;
