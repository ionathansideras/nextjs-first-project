import style from "./MealsGrid.module.css";
import MealItem from "./MealItem";

export default function MealsGrid({ meals }) {
    return (
        <ul className={style.meals}>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
}
