import { useEffect, useState } from "react";
import "./RecipeListCard";
import "./RecipeList.css";
import RecipeListCard from "./RecipeListCard";
// import CountryFlag from "./CountryFlag";

interface RecipeData {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

function RecipeList() {
  const [recipe, setRecipe] = useState<RecipeData[]>([]);
  const [country, setCountry] = useState("American");
  const countries = [
    "American",
    "British",
    "Canadian",
    "Chinese",
    "Croatian",
    "Dutch",
    "Egyptian",
    "Filipino",
    "French",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Jamaican",
    "Japanese",
    "Kenyan",
    "Malaysian",
    "Mexican",
    "Moroccan",
    "Polish",
    "Portuguese",
    "Russian",
    "Spanish",
    "Thai",
    "Tunisian",
    "Turkish",
    "Ukrainian",
    "Uruguayan",
    "Vietnamese",
  ];

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data.meals));
  }, [country]);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(event.target.value);
  };

  return (
    <main>
      <div className="country-select">
        <select value={country} onChange={handleCountryChange}>
          {countries.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <h2 className="title-recipe">
        {/* <CountryFlag countryName={country} /> */}
        {country}
      </h2>
      <article className="card-list">
        {recipe.map((meal) => (
          <RecipeListCard
            key={meal.idMeal}
            picture={meal.strMealThumb}
            recipeName={meal.strMeal}
          />
        ))}
      </article>
    </main>
  );
}
export default RecipeList;
