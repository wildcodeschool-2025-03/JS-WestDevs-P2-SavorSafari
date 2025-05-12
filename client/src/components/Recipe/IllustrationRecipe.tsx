import "./IllustrationRecipe.css";

interface Recipe {
  strMealThumb: string;
  idMeal: string;
  strMeal: string;
}

function IllustrationRecipe({ strMealThumb, idMeal, strMeal }: Recipe) {
  return (
    <article className="picture-element">
      <img src={strMealThumb} alt={`${strMeal} ${idMeal}`} />
    </article>
  );
}
export default IllustrationRecipe;
