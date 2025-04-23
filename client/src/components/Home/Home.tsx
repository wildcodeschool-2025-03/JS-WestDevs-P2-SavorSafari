import "./Home.css";
import { useCallback, useEffect, useState } from "react";
import CardHome from "./CardHome";

interface Recette {
  strMealThumb: string;
  strArea: string;
  strMeal: string;
  idMeal: string;
}

function Home() {
  const [recetteData, setRecetteData] = useState<Recette[]>([]);
  const getRecette = useCallback(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setRecetteData(data.meals);
        }
      });
  }, []);

  useEffect(() => {
    getRecette();
  }, [getRecette]);

  return (
    <main>
      <figcaption>
        <img src="img/image1_projet2.jpg" alt="chef cuisinier" />
      </figcaption>
      <div className="TexteDePresentation">
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
      </div>

      <div className="CardHomeElement">
        {recetteData.map((el) => {
          return (
            <CardHome
              key={el.idMeal}
              strMealThumb={el.strMealThumb}
              strMeal={el.strMeal}
              strArea={el.strArea}
              idMeal={el.idMeal}
              getRecette={getRecette}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Home;
