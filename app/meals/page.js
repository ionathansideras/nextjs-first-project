import Link from "next/link";
import style from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
export default function MealsPage() {
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
                <MealsGrid meals={[]} />
            </main>
        </>
    );
}
