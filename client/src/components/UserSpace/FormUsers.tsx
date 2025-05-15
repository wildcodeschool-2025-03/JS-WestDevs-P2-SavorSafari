import { useEffect, useState } from "react";
import "./FormUsers.css";

interface Ingredient {
  strIngredient: string;
}
function FormUsers() {
  const [allIngredients, setAllIngredients] = useState<Ingredient[]>([]);
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);
  const [currentIngredient, setCurrentIngredient] = useState("");

  const addIngredient = () => {
    if (
      currentIngredient !== "" &&
      currentIngredient !== "select" &&
      !selectedIngredients.includes(currentIngredient)
    ) {
      setSelectedIngredients([...selectedIngredients, currentIngredient]);
      setCurrentIngredient("");
    }
  };
  const removeIngredient = (ingredient: string) => {
    setSelectedIngredients(
      selectedIngredients.filter((item) => item !== ingredient),
    );
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((response) => response.json())
      .then((data) => {
        if (data.meals) {
          setAllIngredients(data.meals);
        }
      });
  }, []);

  return (
    <section className="form-users">
      <h2 className="title-form">Recipe suggestion</h2>
      <form action="/client/src/components/UserSpace" method="post">
        <label htmlFor="name-recipe" id="name-recipes">
          What is the name of your recipe?
        </label>
        <input type="text" id="name-recipe" />
        <label htmlFor="ingredients-list" id="ingredients-list-title">
          Ingredients
        </label>
        <select
          name="ingredients-list"
          id="ingredient-meat-fish-select"
          value={currentIngredient}
          onChange={(e) => setCurrentIngredient(e.target.value)}
        >
          <option value="select">-- Select --</option>
          {allIngredients.map((el) => (
            <option key={el.strIngredient} value={el.strIngredient}>
              {el.strIngredient}
            </option>
          ))}
        </select>
        <button type="button" onClick={addIngredient} id="add-ingredients">
          Add
        </button>
        <ul>
          {selectedIngredients.map((ingredient) => (
            <li key={ingredient}>
              {ingredient.replace(/_/g, " ")}
              <button
                type="button"
                onClick={() => removeIngredient(ingredient)}
                id="remove-ingredients"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        <label htmlFor="illustration-recipe" id="illustration-title">
          Illustration
        </label>
        <input type="file" accept="image/png" className="image-recipe" />
        <label htmlFor="Instructions" id="instructions">
          Instructions
        </label>
        <textarea
          name="instructions-recipe"
          id="instructions-recipe"
          rows={4}
          cols={33}
        >
          Write your recipe here !
        </textarea>
        <button type="submit" id="submit-recipe">
          Submit my recipe
        </button>
      </form>
    </section>
  );
}

export default FormUsers;
