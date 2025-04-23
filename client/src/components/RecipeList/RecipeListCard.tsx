import "./RecipeListCard.css";

interface RecipeListCardProps {
  recipeName: string;
  picture: string;
}

function RecipeListCard({ recipeName, picture }: RecipeListCardProps) {
  return (
    <main>
      <figure className="recipe-list">
        <img src={picture} alt={recipeName} />
        <figcaption>{recipeName}</figcaption>
      </figure>
    </main>
  );
}

export default RecipeListCard;
