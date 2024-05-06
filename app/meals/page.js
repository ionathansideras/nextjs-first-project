import Link from "next/link";
import style from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";
import Loading from "@/components/meals/Loading";

export const metadata = {
    title: "Meals Page",
    description: "Delicious meals, shared by a food-loving community.",
};

async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
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
                <Suspense fallback={<Loading />}>
                    <Meals />
                </Suspense>
            </main>
        </>
    );
}
