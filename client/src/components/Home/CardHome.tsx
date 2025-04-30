import "./CardHome.css";
import { Link } from "react-router";
interface Recipe {
  strMealThumb: string;
  strArea: string;
  strMeal: string;
  idMeal: string;
  getRecipe: () => void;
}

function CardHome({
  strMealThumb,
  strArea,
  strMeal,
  idMeal,
  getRecipe,
}: Recipe) {
  return (
    <article className="card-home">
      <Link to={`/Recipe/${idMeal}`}>
        <img src={strMealThumb} alt={`${strArea} ${strMeal} ${idMeal}`} />
      </Link>
      <div>
        <p>{strArea} </p>
      </div>
      <section className="title-container">
        <article>
          <h2>{strMeal}</h2>
        </article>
        <div>
          <button onClick={getRecipe} type="button">
            Another recipe 🍽️
          </button>
        </div>
      </section>
    </article>
  );
}

export default CardHome;
