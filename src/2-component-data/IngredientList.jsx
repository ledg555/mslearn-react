import "./IngredientList.css";

export default function IngredientList({
  ingredients,
  ingredientClickHandler,
}) {
  const IngredientListItems = ingredients.map((ingredient, index) => {
    return (
      <li
        key={index}
        onClick={() => ingredientClickHandler(index)}
        className={ingredient.prepared ? "prepared" : ""}
      >
        {ingredient.name}
      </li>
    );
  });
  return <ul>{IngredientListItems}</ul>;
}
