import Link from "next/link";
import style from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
export default function MealsPage() {
    const meals = getMeals();
    console.log(meals);
    return (
        <>
            <header className={style.header}>
                <h1>
                    Meals Page <span className={style.highlight}>by you</span>
                </h1>
                <p>
                    Choose your favorite meal and cook it yourself. Its easy and
                    fun.
                </p>
                <p className={style.cta}>
                    <Link href="/meals/share">Share your favorite recipe</Link>
                </p>
            </header>
            <main className={style.main}>
                <MealsGrid meals={meals} />
            </main>
        </>
    );
}
