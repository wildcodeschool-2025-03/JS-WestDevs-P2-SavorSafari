import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./ConsultedRecipe.css";

interface ConsultedRecipe {
  strMeal: string;
  idMeal: string;
}

function ConsultedRecipe() {
  const [recipes, setRecipes] = useState<ConsultedRecipe[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchedRecipes: ConsultedRecipe[] = [];
    const getRecipes = (count: number) => {
      if (count === 0) {
        setRecipes(fetchedRecipes);
        return;
      }
      fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        .then((response) => response.json())
        .then((data) => {
          if (data.meals?.[0]) {
            fetchedRecipes.push(data.meals[0]);
          }
          getRecipes(count - 1);
        });
    };

    getRecipes(4);
  }, []);

  const handleRedirect = (idMeal: string) => {
    navigate(`/recipe/${idMeal}`);
  };

  return (
    <article className="consulted-recipes">
      <h2 className="title-consulted-recipe">My consulted recipes</h2>
      {recipes.map((recipe) => (
        <div key={recipe.idMeal}>
          <button
            type="button"
            onClick={() => handleRedirect(recipe.idMeal)}
            id="button-consulted-recipe"
          >
            {recipe.strMeal}
          </button>
        </div>
      ))}
    </article>
  );
}

export default ConsultedRecipe;
