import "./CardRecipe.css";

interface Recipe {
  idMeal?: string;
  strMeal: string;
  strIngredient: string[];
  strInstructions: string;
  strMeasure: string[];
}

function CardRecipe({
  strMeal,
  strIngredient,
  strMeasure,
  strInstructions,
}: Recipe) {
  const result = [];
  for (let i = 0; i < strIngredient.length; i++) {
    const ingredient = strIngredient[i];
    const measure = strMeasure[i];
    result.push({ ingredient, measure });
  }
  const toTheLine = strInstructions
    .replace(/[\r]/g, "")
    .split("\n")
    .filter((char) => char !== "");
  return (
    <article className="card-element">
      <h2>{strMeal}</h2>
      <section className="ingredients">
        {result.map((el) => (
          <section className="ingredient-card" key={el.ingredient}>
            <p>{el.ingredient}</p>
            <p>{el.measure}</p>
          </section>
        ))}
      </section>
      <section className="instructions">
        <ul>
          {toTheLine.map((el) => (
            <li key={el}>{el}</li>
          ))}
        </ul>
      </section>
    </article>
  );
}

export default CardRecipe;
