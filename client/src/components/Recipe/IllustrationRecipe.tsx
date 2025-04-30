import "./IllustrationRecipe.css";

interface Recipe {
  strMealThumb: string;
  idMeal: string;
  strMeal: string;
}

function IllustrationRecipe({ strMealThumb, idMeal, strMeal }: Recipe) {
  return (
    <article>
      <img src={strMealThumb} alt={`${strMeal} ${idMeal}`} />
    </article>
  );
}

export default IllustrationRecipe;
