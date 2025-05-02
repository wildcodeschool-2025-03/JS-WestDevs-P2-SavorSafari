import "./IllustrationRecipe.css";

interface Recipe {
  strMealThumb: string;
  idMeal: string;
  strMeal: string;
}

function IllustrationRecipe({ strMealThumb, idMeal, strMeal }: Recipe) {
  return (
    <article className="picture-element">
      <section className="title-picture-recipe">
        <h2>{strMeal}</h2>
      </section>
      <section className="picture-recipe">
        <img src={strMealThumb} alt={`${strMeal} ${idMeal}`} />
      </section>
    </article>
  );
}

export default IllustrationRecipe;
