import { useEffect, useState } from "react";
import "./RecipeListCard";
import RecipeListCard from "./RecipeListCard";

interface RecipeData {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

function RecipeList() {
  const [recipe, setRecipe] = useState<RecipeData[]>([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
      .then((response) => response.json())
      .then((data) => setRecipe(data.meals));
  }, []);

  return (
    <main>
      {recipe.map((meal) => (
        <RecipeListCard
          key={meal.idMeal}
          picture={meal.strMealThumb}
          recipeName={meal.strMeal}
        />
      ))}
    </main>
  );
}
export default RecipeList;
