import "./Home.css";
import { useCallback, useEffect, useState } from "react";
import CardHome from "./CardHome";

interface Recipe {
  strMealThumb: string;
  strArea: string;
  strMeal: string;
  idMeal: string;
}

function Home() {
  const [recetteData, setRecetteData] = useState<Recipe[]>([]);
  const getRecipe = useCallback(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setRecetteData(data.meals);
        }
      });
  }, []);

  useEffect(() => {
    getRecipe();
  }, [getRecipe]);

  return (
    <main className="home-elements">
      <div className="chef">
        <img src="/img/image1_projet2.jpg" alt="chef" />
      </div>
      <hgroup>
        <h2>
          Welcome to SavorSafari, your ultimate culinary destination to explore
          the flavors of the world!
        </h2>
        <p>
          At SavorSafari, discover recipes from around the world. With our
          interactive map, simply click on a country to dive into its culinary
          traditions.
        </p>
        <h3>Grab your pots and pans, and enjoy the delicious journey!</h3>
      </hgroup>
      <div className="card-container-home">
        {recetteData.map((el) => {
          return (
            <CardHome
              key={el.idMeal}
              strMealThumb={el.strMealThumb}
              strMeal={el.strMeal}
              strArea={el.strArea}
              idMeal={el.idMeal}
              getRecipe={getRecipe}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Home;
