import "./CardRecipe.css";
import React from "react";

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
  return (
    <article>
      <h2>{strMeal}</h2>
      <section className="ingredients">
        {result.map((el) => (
          <React.Fragment key={el.ingredient}>
            <p>{el.ingredient}</p>
            <p>{el.measure}</p>
          </React.Fragment>
        ))}
      </section>
      <section className="instructions">
        <p>{strInstructions}</p>
      </section>
    </article>
  );
}

export default CardRecipe;
