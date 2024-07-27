import "./IngredientList.css";

export default function IngredientList({ ingredients }) {
  const IngredientListItems = ingredients.map((ingredient, index) => {
    return (
      <li key={index} className={ingredient.prepared ? "prepared" : ""}>
        {ingredient.name}
      </li>
    );
  });
  return <ul>{IngredientListItems}</ul>;
}