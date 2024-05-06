import { getMeal } from "@/lib/meals";
import style from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const meal = getMeal(params.slug);

    console.log(meal);
    if (!meal) {
        notFound();
    }

    return {
        title: meal.title,
        description: meal.summary,
    };
}

export default function SlugPage({ params }) {
    const meal = getMeal(params.slug);

    if (!meal) {
        // this will stop the page from rendering
        // and it will show the closest 404 page
        notFound();
    }

    // Replace new lines with <br /> to render them in HTML
    meal.instructions = meal.instructions.replace(/\n/g, "<br />");

    return (
        <>
            <header className={style.header}>
                <div className={style.image}>
                    <Image src={meal.image} fill />
                </div>
                <div className={style.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={style.creator}>
                        by{" "}
                        <a href={`mailto: ${meal.creator_email}`}>
                            {meal.creator_email}
                        </a>
                    </p>
                    <p className={style.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className={style.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions,
                    }}
                ></p>
            </main>
        </>
    );
}
