import "./RecipeTitle.css";

export default function RecipeTitle({title, feedback}) {
  return (
    <section>
      <h2>{title}</h2>
      <p className={feedback.rating < 3.5 ? "red" : "teal"}>{feedback.rating}⭐ from {feedback.reviews} reviews</p>
    </section>
  )
}