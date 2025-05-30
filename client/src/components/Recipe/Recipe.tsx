import { useEffect, useState } from "react";
import "./Recipe.css";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

import CardRecipe from "./CardRecipe";
import IllustrationRecipe from "./IllustrationRecipe";

interface Recipe {
  strMealThumb: string;
  strArea?: string;
  strMeal: string;
  idMeal: string;
  strInstructions: string;
  strIngredient: string[];
  strMeasure: string[];
}

function Recipe() {
  const [recipeData, setRecipeData] = useState<Recipe | null>(null);
  // if (!recipeData) {
  //   return <p>Loading recipe in progress...</p>;
  // }
  const params = useParams();
  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`,
    )
      .then((response) => response.json())
      .then((data) => {
        const meal = data.meals[0];
        const recipe: Recipe = {
          idMeal: meal.idMeal,
          strMealThumb: meal.strMealThumb,
          strInstructions: meal.strInstructions,
          strIngredient: [],
          strMeasure: [],
          strMeal: meal.strMeal,
        };
        const ingredients: string[] = [];
        const measures = [];
        for (const [key, value] of Object.entries(meal)) {
          if (key.startsWith("strIngredient")) {
            if (value !== " " && value !== null && value !== "") {
              ingredients.push(value as string);
            }
          } else if (key.startsWith("strMeasure")) {
            if (value !== " " && value !== null) {
              measures.push(value as string);
            }
          }
        }
        recipe.strIngredient = ingredients;
        recipe.strMeasure = measures;
        setRecipeData(recipe);
      });
  }, [params]);
  const navigate = useNavigate();
  if (recipeData === null) {
    return;
  }
  return (
    <section className="recipe-element">
      <article className="button-container">
        <button
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Previous
        </button>
      </article>
      <section className="title-picture-recipe">
        <h2>{recipeData?.strMeal}</h2>
      </section>
      <article className="illustration-recipe">
        <IllustrationRecipe
          key={recipeData?.idMeal}
          idMeal={recipeData?.idMeal}
          strMealThumb={recipeData?.strMealThumb}
          strMeal={recipeData?.strMeal}
        />
      </article>
      <article className="card-recipe">
        <CardRecipe
          key={recipeData?.idMeal}
          strMeal={recipeData?.strMeal}
          strIngredient={recipeData?.strIngredient}
          strMeasure={recipeData?.strMeasure}
          strInstructions={recipeData?.strInstructions}
        />
      </article>
    </section>
  );
}

export default Recipe;
