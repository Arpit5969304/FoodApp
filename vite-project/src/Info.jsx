import { useParams } from "react-router";
import { useEffect, useState } from "react";
import "./Meal.css";

export default function Info() {
  const { mealid } = useParams();

  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getMealInfo = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`
        );

        const data = await response.json();

        if (!data.meals) {
          setError("❌ Recipe not found");
          setMeal(null);
        } else {
          setMeal(data.meals[0]);
        }
      } catch (err) {
        setError("⚠️ Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getMealInfo();
  }, [mealid]);

  if (loading) {
    return <h2 className="msg">⏳ Loading recipe...</h2>;
  }

  if (error) {
    return <h2 className="msg">{error}</h2>;
  }

  return (
    <div className="mealInfo">
      {/* Image Section */}
      <div className="imageBox">
        <img src={meal?.strMealThumb} alt={meal?.strMeal} />
      </div>

      {/* Info Section */}
      <div className="info">
        <h1 className="heading">{meal?.strMeal}</h1>

        <button className="mealBtn">🍽️ View Recipe</button>

        <h3 className="subHeading">👨‍🍳 Instructions</h3>

        {meal?.strInstructions ? (
          <ol className="instructions">
            {meal.strInstructions
              .split(/\r\n|\n/)
              .filter(step => step.trim())
              .map((step, index) => (
                <li key={index} className="instructionItem">
                  {step}
                </li>
              ))}
          </ol>
        ) : (
          <p className="msg">No instructions available.</p>
        )}
      </div>
    </div>
  );
}


