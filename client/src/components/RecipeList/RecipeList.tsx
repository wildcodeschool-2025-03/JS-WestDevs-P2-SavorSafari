import { useEffect, useState } from "react";
import "./RecipeListCard";
import "./RecipeList.css";
import { useNavigate, useParams } from "react-router";
import RecipeListCard from "./RecipeListCard";

interface RecipeData {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

const RecipeList = () => {
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
  const navigate = useNavigate();
  const { country: idCountry } = useParams<{ country: string }>();

  useEffect(() => {
    const fetchCountry = idCountry || country;
    setCountry(fetchCountry);
    fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${fetchCountry}`,
    )
      .then((response) => response.json())
      .then((data) => setRecipe(data.meals));
  }, [idCountry, country]);

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = event.target.value;
    setCountry(selectedCountry);
    navigate(`/recipe-list/${selectedCountry}`);
  };

  return (
    <>
      <div className="country-select">
        <select value={country} onChange={handleCountryChange}>
          {countries.map((el) => (
            <option key={el} value={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <h2 className="title-recipe">{country}</h2>
      <article className="card-list">
        {recipe.map((meal) => (
          <RecipeListCard
            key={meal.idMeal}
            picture={meal.strMealThumb}
            recipeName={meal.strMeal}
            idMeal={meal.idMeal}
          />
        ))}
      </article>
    </>
  );
};
export default RecipeList;
